import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {questionType} from '../../typings/question';
import {initialGamePlaySlice} from '../../typings/state';

const GamePlaySlice = createSlice({
  name: 'gamePlay',
  initialState: initialGamePlaySlice,
  reducers: {
    setQuestions(state, action: PayloadAction<questionType[]>) {
      state.questionList = action.payload;
      state.status = 'succeeded';
    },
    setIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;
    },
    setId(state, action: PayloadAction<number>) {
      state.firstQuestionId = action.payload;
    },
  },
});

export const {setQuestions, setIndex, setId} = GamePlaySlice.actions;

export default GamePlaySlice.reducer;
