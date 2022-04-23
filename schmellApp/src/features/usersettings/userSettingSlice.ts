import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LANGUAGE_KEY, VOICE_KEY, VOLUME_KEY} from '../../constants/common';
import {user_settings} from '../../typings/settingsTypes';
import {asyncStorageService} from '../../utils/updateAsyncStorage';
import {encryptedStorageService} from '../../utils/EncryptedStorageUtil';
import axiosService from '../../services/axios';
import {decrypt} from '../../utils/crypto';

const initialState = {
  api_key: '',
  volume: 3,
  voice: 'L',
  language: 'N',
  status: 'idle',
  error: '',
};

export const setTokens = createAsyncThunk(
  'usersetting/setTokens',
  async (id: string) => {
    const temp = {
      name: id,
    };
    const axe = axiosService.post(decrypt('YXV0aC9nZW5lcmF0ZV9rZXkv'), temp);
    const token_res = await axe.then(res => res.data);
    return token_res;
  },
);

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
        state.api_key = action.payload.api_key;
        encryptedStorageService(
          `${action.payload.key}_key`,
          action.payload.api_key,
          'SET',
        );
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
