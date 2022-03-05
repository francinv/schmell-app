import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  games: [],
  weeks: [],
  questions: [],
  status: 'idle',
  error: null,
};

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
});

export const {setGames, setStatus, setWeeks, setQuestions} = GameSlice.actions;

export default GameSlice.reducer;
