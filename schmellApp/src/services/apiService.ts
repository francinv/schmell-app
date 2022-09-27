import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import RNUniqueId from '../native/RNUniqueId';
import {
  AddInGameFilter,
  AddPlayerFilter,
  AuthData,
  AuthResponse,
  GameResponse,
  QuestionFilter,
  QuestionResponse,
  WeekFilters,
  WeekResponse,
} from '../typings/api';
import {decrypt} from '../utils/crypto';
import encryptedStorageService from './encryptedStorageService';

/* const production = 'aHR0cHM6Ly9zY2htZWxsLmhlcm9rdWFwcC5jb20vYXBpLw=='; */
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://schmell-staging.herokuapp.com/api/',
  prepareHeaders: async headers => {
    const {uniqueString} = RNUniqueId.getConstants();
    const token = await encryptedStorageService(`${uniqueString}_key`, 'GET');

    if (token) {
      headers.set('authorization', `Api-Key ${token}`);
    }

    return headers;
  },
});

const baseQueryWithAuthReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const {uniqueString} = RNUniqueId.getConstants();

    const newTokenRes = await baseQuery(
      {
        url: 'auth/key/generate/',
        method: 'POST',
        body: {name: uniqueString},
      },
      api,
      extraOptions,
    );

    if (newTokenRes.data) {
      const returnedData = newTokenRes.data as AuthResponse;

      encryptedStorageService(
        `${uniqueString}_key`,
        'SET',
        returnedData.api_key,
      );

      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiService = createApi({
  reducerPath: 'schmellApi',
  baseQuery: baseQueryWithAuthReauth,
  endpoints: builder => ({
    setTokens: builder.query<AuthResponse, AuthData>({
      query: keyData => ({
        url: 'auth/key/generate/',
        method: 'POST',
        body: keyData,
      }),
    }),
    getGames: builder.query<GameResponse, string>({
      query: status => `cms/game/?status=${status}`,
    }),
    getWeek: builder.query<WeekResponse, WeekFilters>({
      query: filters =>
        `cms/week/?weekNum=${filters.weekNumber}&game=${filters.idGame}`,
    }),
    getQuestions: builder.query<QuestionResponse, QuestionFilter>({
      query: filter =>
        `cms/question/?related_week=${filter.idWeek}&sort=PHASE_ASC&function=RANDOMIZE`,
    }),
    addPlayerToQuestions: builder.query<QuestionResponse, AddPlayerFilter>({
      query: filter => ({
        url: 'cms/question/players/add/',
        method: 'POST',
        body: filter,
      }),
    }),
    addPlayerInGame: builder.query<QuestionResponse, AddInGameFilter>({
      query: filter => ({
        url: 'cms/question/players/add/inGame/',
        method: 'POST',
        body: filter,
      }),
    }),
  }),
});

export const {
  useGetGamesQuery,
  useLazyGetQuestionsQuery,
  useGetWeekQuery,
  useSetTokensQuery,
  usePrefetch,
  useAddPlayerInGameQuery,
  useAddPlayerToQuestionsQuery,
  useGetQuestionsQuery,
  useLazyAddPlayerInGameQuery,
} = apiService;
