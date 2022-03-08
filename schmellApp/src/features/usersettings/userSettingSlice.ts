import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ACCESS_TOKEN,
  LANGUAGE_KEY,
  REFRESH_TOKEN,
  VOICE_KEY,
  VOLUME_KEY,
} from '../../constants/common';
import {user_settings} from '../../typings/settingsTypes';
import {asyncStorageService} from '../../utils/updateAsyncStorage';
import {USERNAME, PASSWORD} from '@env';
import axiosService from '../../services/axios';

const initialState = {
  access: '',
  refresh: '',
  volume: 3,
  voice: 'L',
  language: 'N',
  status: 'idle',
  error: '',
};

export const setTokens = createAsyncThunk('usersetting/setTokens', async () => {
  const data = {
    username: USERNAME,
    password: PASSWORD,
  };
  const axe = axiosService.post('auth/login/', data);
  const login_res = axe.then(res => res.data);
  return login_res;
});

export const fetchSettings = createAsyncThunk(
  'usersetting/fetchSettings',
  async () => {
    const temp = {
      vol: await asyncStorageService(VOLUME_KEY, '', 'GET'),
      voi: await asyncStorageService(VOICE_KEY, '', 'GET'),
      lang: await asyncStorageService(LANGUAGE_KEY, '', 'GET'),
    };
    return temp;
  },
);

export const postSettings = createAsyncThunk(
  'usersetting/postSettings',
  async (data: user_settings) => {
    await asyncStorageService(VOLUME_KEY, data.volume, 'SET');
    await asyncStorageService(VOICE_KEY, data.voice, 'SET');
    await asyncStorageService(LANGUAGE_KEY, data.language, 'SET');
    return data;
  },
);

const UserSettingSlice = createSlice({
  name: 'usersetting',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSettings.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      if (action.payload) {
        state.volume = action.payload.vol;
        state.voice = action.payload.voi;
        state.language = action.payload.lang;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchSettings.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(postSettings.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(postSettings.fulfilled, (state, action) => {
      if (action.payload) {
        state.volume = action.payload.volume;
        state.voice = action.payload.voice;
        state.language = action.payload.language;
      }
      state.status = 'succeeded';
    });
    builder.addCase(postSettings.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(setTokens.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(setTokens.fulfilled, (state, action) => {
      if (action.payload) {
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
        asyncStorageService(ACCESS_TOKEN, action.payload.access, 'SET');
        asyncStorageService(REFRESH_TOKEN, action.payload.refresh, 'SET');
      }
      state.status = 'succeeded';
    });
    builder.addCase(setTokens.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
  },
});

export const {setStatus} = UserSettingSlice.actions;

export default UserSettingSlice.reducer;
