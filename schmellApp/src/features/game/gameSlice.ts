import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
  },
});

export const {setSelectedGame, setWeek} = GameSlice.actions;

export default GameSlice.reducer;
