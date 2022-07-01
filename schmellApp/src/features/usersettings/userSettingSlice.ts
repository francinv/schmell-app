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
  voice: 'F',
  language: 'nb-NO',
  status: 'idle',
  error: '',
};

export const setTokens = createAsyncThunk(
  'usersetting/setTokens',
  async (id: string) => {
    const temp = {
      name: id,
    };
    const axe = axiosService.post(decrypt('YXV0aC9rZXkvZ2VuZXJhdGUv'), temp);
    console.log(temp);
    const token_res = await axe.then(res => res.data);
    console.log('returned token', token_res);
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

export const postVolume = createAsyncThunk(
  'usersetting/postVolume',
  async (data: number) => {
    await asyncStorageService(VOLUME_KEY, data, 'SET');
    return data;
  },
);

export const postVoice = createAsyncThunk(
  'usersetting/postVoice',
  async (data: string) => {
    await asyncStorageService(VOICE_KEY, data, 'SET');
    return data;
  },
);

export const postLanguage = createAsyncThunk(
  'usersetting/postLanguage',
  async (data: string) => {
    await asyncStorageService(LANGUAGE_KEY, data, 'SET');
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
    builder.addCase(postVolume.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(postVolume.fulfilled, (state, action) => {
      if (action.payload) {
        state.volume = action.payload;
      } else if (action.payload === 0) {
        state.volume = 0;
      }
      state.status = 'succeeded';
    });
    builder.addCase(postVolume.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(postVoice.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(postVoice.fulfilled, (state, action) => {
      if (action.payload) {
        state.voice = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(postVoice.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(postLanguage.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(postLanguage.fulfilled, (state, action) => {
      if (action.payload) {
        state.language = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(postLanguage.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
  },
});

export const {setStatus} = UserSettingSlice.actions;

export default UserSettingSlice.reducer;
