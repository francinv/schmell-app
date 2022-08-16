import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axiosService from '../../services/axiosService';
import {initialGameSlice} from '../../typings/stateTypes';
import {decrypt} from '../../utils/crypto';

export const fetchGames = createAsyncThunk('game/fetchGames', async () => {
  return axiosService
    .get(decrypt('Y21zL2dhbWUvP3N0YXR1cz1QL'))
    .then(res => res.data);
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
  initialState: initialGameSlice,
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
      .addMatcher(isPendingAction('game/'), state => {
        state.status = 'loading';
        state.error = '';
      })
      .addMatcher(isRejectedAction('game/'), (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setStatus, setSelectedGame} = GameSlice.actions;

export default GameSlice.reducer;
