import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {gameType} from '../../typings/gameTypes';
import {weekType} from '../../typings/weekTypes';
import {questionType} from '../../typings/questionTypes';
import {
  GAME_KEY,
  LAST_UPDATED,
  QUESTIONS_KEY,
  WEEKS_KEY,
} from '../../constants/common';
import {getDate, getWeekNumber, isTimeToUpdate} from '../../utils/dateUtil';
import {asyncStorageService} from '../../utils/updateAsyncStorage';
import axiosService from '../../services/axios';

const games: gameType[] = [];
const weeks: weekType[] = [];
const questions: questionType[] = [];

const initialState = {
  games,
  weeks,
  questions,
  status: 'idle',
  error: '',
  selectedGame: {},
  weekNumber: getWeekNumber(),
};

export const fetchFromAPI = createAsyncThunk('game/fetchFromAPI', async () => {
  const game_axe = axiosService.get('game/');
  const games_res = await game_axe.then(res => res.data);
  const question_axe = axiosService.get('question/');
  const question_res = await question_axe.then(res => res.data);
  const week_axe = axiosService.get('week/');
  const week_res = await week_axe.then(res => res.data);
  if (games_res) {
    asyncStorageService(GAME_KEY, games_res, 'SET');
  }
  if (question_res) {
    asyncStorageService(QUESTIONS_KEY, question_res, 'SET');
  }
  if (week_res) {
    asyncStorageService(WEEKS_KEY, week_res, 'SET');
  }
});

export const fetchFromStorage = createAsyncThunk(
  'game/fetchFromStorage',
  async () => {
    const last_updated = await asyncStorageService(LAST_UPDATED, '', 'GET');
    if (isTimeToUpdate(last_updated) || !last_updated) {
      fetchFromAPI();
      asyncStorageService(LAST_UPDATED, getDate(), 'SET');
    }
    const temp_game = await asyncStorageService(GAME_KEY, '', 'GET');
    const temp_question = await asyncStorageService(QUESTIONS_KEY, '', 'GET');
    const temp_week = await asyncStorageService(WEEKS_KEY, '', 'GET');
    const temp = {
      game: temp_game,
      question: temp_question,
      week: temp_week,
    };
    return temp;
  },
);

const GameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSelectedGame(state, action: PayloadAction<object>) {
      state.selectedGame = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFromAPI.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchFromAPI.fulfilled, state => {
      state.status = 'succeeded';
    });
    builder.addCase(fetchFromAPI.rejected, (state, action) => {
      state.status = 'failed';
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(fetchFromStorage.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchFromStorage.fulfilled, (state, action) => {
      if (action.payload) {
        state.games = action.payload.game;
        state.questions = action.payload.question;
        state.weeks = action.payload.week;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchFromStorage.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
  },
});

export const {setStatus} = GameSlice.actions;

export default GameSlice.reducer;
