import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {questionType} from '../../types/question';
import {initialGameSlice} from '../../types/state';

const GameSlice = createSlice({
  name: 'game',
  initialState: initialGameSlice,
  reducers: {
    setSelectedGame(state, action: PayloadAction<number>) {
      state.selectedGameId = action.payload;
    },
    setWeek(state, action: PayloadAction<number>) {
      state.selectedWeekId = action.payload;
    },
    setQuestions(state, action: PayloadAction<questionType[]>) {
      state.questionList = action.payload;
    },
  },
});

export const {setSelectedGame, setWeek, setQuestions} = GameSlice.actions;

export default GameSlice.reducer;
