import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {gameType} from '../../typings/gameTypes';
import {weekType} from '../../typings/weekTypes';
import {questionType} from '../../typings/questionTypes';
import axiosService from '../../services/axiosService';
import {decrypt} from '../../utils/crypto';

const games: gameType[] = [];
const week: weekType = {
  id: 0,
  week_number: 0,
  game: 0,
};
const questions: questionType[] = [];

const selectedGame: gameType = {
  id: 1,
  name: '',
  description: '',
  related_question: false,
  last_updated: '',
  status: '',
  logo: '',
  release_date: '',
};

const initialState = {
  games,
  week,
  questions,
  status: 'idle',
  error: '',
  selectedGame,
};

export const fetchGames = createAsyncThunk('game/fetchGames', async () => {
  return axiosService.get(decrypt('Y21zL2dhbWUv')).then(res => res.data);
});

export const fetchWeek = createAsyncThunk(
  'game/fetchWeek',
  async (filters: {weekNumber: number; idGame: number}) => {
    const {weekNumber, idGame} = filters;
    const urlOfEndpoint = `cms/week/?weekNum=${weekNumber}&game=${idGame}`;
    return axiosService.get(urlOfEndpoint).then(res => res.data);
  },
);

export const fetchQuestions = createAsyncThunk(
  'game/fetchQuestions',
  async (idWeek: number) => {
    return axiosService
      .get(
        `cms/question/?related_week=${idWeek}&sort=PHASE_ASC&function=RANDOMIZE`,
      )
      .then(res => res.data);
  },
);

const hasPrefix = (action: AnyAction, prefix: string) =>
  action.type.startsWith(prefix);
const isPending = (action: AnyAction) => action.type.endsWith('/pending');
const isRejected = (action: AnyAction) => action.type.endsWith('/rejected');

const isPendingAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isPending(action);
  };

const isRejectedAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isRejected(action);
  };

const GameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSelectedGame(state, action: PayloadAction<number>) {
      let tempObject = state.games.find(function (object) {
        return object.id === action.payload;
      });
      if (tempObject) {
        state.selectedGame = tempObject;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      if (action.payload) {
        state.games = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchWeek.fulfilled, (state, action) => {
      if (action.payload) {
        state.week = action.payload[0];
      }
      state.status = 'succeeded';
    });
    builder
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        if (action.payload) {
          state.questions = action.payload;
        }
        state.status = 'succeeded';
      })
      .addMatcher(isPendingAction('usersetting/'), state => {
        state.status = 'loading';
        state.error = '';
      })
      .addMatcher(isRejectedAction('usersetting/'), (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setStatus, setSelectedGame} = GameSlice.actions;

export default GameSlice.reducer;
