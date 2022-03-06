import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {gameType} from '../../typings/gameTypes';
import {weekType} from '../../typings/weekTypes';
import {questionType} from '../../typings/questionTypes';
import {
  GAME_KEY,
  LAST_UPDATED_GAME,
  LAST_UPDATED_QUESTION,
  LAST_UPDATED_WEEKS,
  QUESTIONS_KEY,
  WEEKS_KEY,
} from '../../constants/common';
import {getDate, isTimeToUpdate} from '../../utils/dateUtil';
import game_sample from '../../assets/json/game_sample.json';
import questions_sample from '../../assets/json/questions_sample.json';
import week_sample from '../../assets/json/week_sample.json';
import {asyncStorageService} from '../../utils/updateAsyncStorage';

const games: gameType[] = [];
const weeks: weekType[] = [];
const questions: questionType[] = [];

const initialState = {
  games,
  weeks,
  questions,
  status: 'idle',
  error: '',
};

export const fetchGames = createAsyncThunk('game/fetchGames', async () => {
  const last_updated = await asyncStorageService(LAST_UPDATED_GAME, '', 'GET');
  if (last_updated) {
    if (isTimeToUpdate(last_updated)) {
      //TODO - updateAsyncStorage with new data.
      asyncStorageService(LAST_UPDATED_GAME, getDate(), 'SET');
    }
  } else {
    asyncStorageService(GAME_KEY, game_sample, 'SET');
    //TODO - connect with server, fetch from API. setAsyncStorage.
  }
  const res = await asyncStorageService(GAME_KEY, '', 'GET')!;
  return res;
});

export const fetchQuestions = createAsyncThunk(
  'game/fetchQuestions',
  async () => {
    const last_updated = await asyncStorageService(
      LAST_UPDATED_QUESTION,
      '',
      'GET',
    );
    if (last_updated) {
      if (isTimeToUpdate(last_updated)) {
        //TODO - updateAsyncStorage with new data.
        asyncStorageService(LAST_UPDATED_QUESTION, getDate(), 'SET');
      }
    } else {
      asyncStorageService(QUESTIONS_KEY, questions_sample, 'SET');
      //TODO - connect with server, fetch from API. setAsyncStorage.
    }
    const res = await asyncStorageService(QUESTIONS_KEY, '', 'GET')!;
    return res;
  },
);

export const fetchWeeks = createAsyncThunk('game/fetchWeeks', async () => {
  const last_updated = await asyncStorageService(LAST_UPDATED_WEEKS, '', 'GET');
  if (last_updated) {
    if (isTimeToUpdate(last_updated)) {
      //TODO - updateAsyncStorage with new data.
      asyncStorageService(LAST_UPDATED_WEEKS, getDate(), 'SET');
    }
  } else {
    asyncStorageService(WEEKS_KEY, week_sample, 'SET');
    //TODO - connect with server, fetch from API. setAsyncStorage.
  }
  const res = await asyncStorageService(WEEKS_KEY, '', 'GET')!;
  return res;
});

const GameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setGames(state, action: PayloadAction<[]>) {
      state.games = action.payload;
    },
    setWeeks(state, action: PayloadAction<[]>) {
      state.weeks = action.payload;
    },
    setQuestions(state, action: PayloadAction<[]>) {
      state.questions = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchGames.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      if (action.payload) {
        state.games = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.status = 'failed';
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(fetchQuestions.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      if (action.payload) {
        state.questions = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(fetchWeeks.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchWeeks.fulfilled, (state, action) => {
      if (action.payload) {
        state.weeks = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchWeeks.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
  },
});

export const {setGames, setStatus, setWeeks, setQuestions} = GameSlice.actions;

export default GameSlice.reducer;
