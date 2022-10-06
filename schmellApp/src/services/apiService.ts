import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {
  AddInGameFilter,
  AddPlayerFilter,
  GameResponse,
  QuestionFilter,
  QuestionResponse,
  WeekFilters,
  WeekResponse,
} from '../types/api';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_BASE_URL,
  prepareHeaders: async headers => {
    headers.set('authorization', `Api-Key ${Config.API_KEY}`);
    return headers;
  },
});

export const apiService = createApi({
  reducerPath: 'schmellApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
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
  usePrefetch,
  useAddPlayerInGameQuery,
  useAddPlayerToQuestionsQuery,
  useGetQuestionsQuery,
  useLazyAddPlayerInGameQuery,
} = apiService;
