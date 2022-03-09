import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const players: string[] = [];

const initialState = {
  players,
  teams: 0,
  readOut: false,
  lastPlayer: '',
};

const GameSettingSlice = createSlice({
  name: 'gamesetting',
  initialState: initialState,
  reducers: {
    setPlayers(state, action: PayloadAction<[]>) {
      state.players = action.payload;
    },
    addPlayers(state, action: PayloadAction<string>) {
      state.players.push(action.payload);
    },
    setTeams(state, action: PayloadAction<number>) {
      state.teams = action.payload;
    },
    wantReadOut(state) {
      state.readOut = true;
    },
    noReadOut(state) {
      state.readOut = false;
    },
    setLastPlayer(state, action: PayloadAction<string>) {
      state.lastPlayer = action.payload;
    },
  },
});

export const {
  setPlayers,
  addPlayers,
  setTeams,
  wantReadOut,
  noReadOut,
  setLastPlayer,
} = GameSettingSlice.actions;

export default GameSettingSlice.reducer;
