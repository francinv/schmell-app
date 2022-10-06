import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {question} from '../../types/question';
import {initialGamePlaySlice} from '../../types/state';

const GamePlaySlice = createSlice({
  name: 'gamePlay',
  initialState: initialGamePlaySlice,
  reducers: {
    setQuestions(state, action: PayloadAction<question[]>) {
      state.questionList = action.payload;
      state.status = 'succeeded';
    },
    setIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;
    },
    setInnerGamePlayList(state, action: PayloadAction<string[] | number[]>) {
      state.innerGamePlayList = action.payload;
    },
    setInnerGameIndex(state, action: PayloadAction<number>) {
      state.innerGamePlayIndex = action.payload;
    },
    setRandomNumber(state, action: PayloadAction<number>) {
      state.randomNumber = action.payload;
    },
    setIsDeckCardDisabled(state, action: PayloadAction<boolean>) {
      state.isDeckCardDisabled = action.payload;
    },
    setIsDeckCardShow(state, action: PayloadAction<boolean>) {
      state.isDeckCardShow = action.payload;
    },
  },
});

export const {
  setQuestions,
  setIndex,
  setInnerGamePlayList,
  setInnerGameIndex,
  setRandomNumber,
  setIsDeckCardDisabled,
  setIsDeckCardShow,
} = GamePlaySlice.actions;

export default GamePlaySlice.reducer;
