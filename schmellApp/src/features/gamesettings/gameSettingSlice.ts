import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialGameSettingSlice} from '../../typings/state';

const GameSettingSlice = createSlice({
  name: 'gamesetting',
  initialState: initialGameSettingSlice,
  reducers: {
    setPlayers(state, action: PayloadAction<[]>) {
      state.players = action.payload;
    },
    addPlayers(state, action: PayloadAction<string>) {
      state.players.unshift(action.payload);
    },
    setTeams(state, action: PayloadAction<number>) {
      state.teams = action.payload;
    },
    setReadOut(state, action: PayloadAction<boolean>) {
      state.readOut = action.payload;
    },
    setLastPlayer(state, action: PayloadAction<string>) {
      state.lastPlayer = action.payload;
    },
    removePlayer(state, action: PayloadAction<number>) {
      state.players.splice(action.payload, 1);
    },
  },
});

export const {
  setPlayers,
  addPlayers,
  setTeams,
  setReadOut,
  setLastPlayer,
  removePlayer,
} = GameSettingSlice.actions;

export default GameSettingSlice.reducer;
