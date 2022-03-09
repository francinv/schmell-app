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
import {fetchFromAPI} from '../../services/fetchFromApi';

const games: gameType[] = [];
const weeks: weekType[] = [];
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
  weeks,
  questions,
  status: 'idle',
  error: '',
  selectedGame,
  weekNumber: getWeekNumber(),
};

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
    setSelectedGame(state, action: PayloadAction<gameType>) {
      state.selectedGame = action.payload;
    },
    setWeek(state, action: PayloadAction<number>) {
      state.weekNumber = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFromStorage.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchFromStorage.fulfilled, (state, action) => {
      if (action.payload) {
        state.games = action.payload.game;
        state.weeks = action.payload.week;
        state.questions = action.payload.question;
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

export const {setStatus, setWeek, setSelectedGame} = GameSlice.actions;

export default GameSlice.reducer;
