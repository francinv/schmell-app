import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {questionType} from '../../types/question';
import {initialGamePlaySlice} from '../../types/state';

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
    setInnerGamePlayList(state, action: PayloadAction<string[]>) {
      state.innerGamePlayList = action.payload;
    },
    setInnerGameIndex(state, action: PayloadAction<number>) {
      state.innerGamePlayIndex = action.payload;
    },
  },
});

export const {
  setQuestions,
  setIndex,
  setId,
  setInnerGamePlayList,
  setInnerGameIndex,
} = GamePlaySlice.actions;

export default GamePlaySlice.reducer;
