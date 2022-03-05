import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  access: '',
  refresh: '',
  volume: 3,
  voice: 'L',
  language: 'N',
  status: 'idle',
  error: null,
};

const UserSettingSlice = createSlice({
  name: 'usersetting',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setAccess(state, action: PayloadAction<string>) {
      state.access = action.payload;
    },
    setRefresh(state, action: PayloadAction<string>) {
      state.refresh = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setVoice(state, action: PayloadAction<string>) {
      state.voice = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const {
  setAccess,
  setStatus,
  setRefresh,
  setVoice,
  setVolume,
  setLanguage,
} = UserSettingSlice.actions;

export default UserSettingSlice.reducer;
