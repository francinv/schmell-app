import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {questionType} from '../../typings/questionTypes';
import {initialGameSlice} from '../../typings/stateTypes';

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
