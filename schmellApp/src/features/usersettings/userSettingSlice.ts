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

const initialState = {
  access: '',
  refresh: '',
  volume: 3,
  voice: 'L',
  language: 'N',
  status: 'idle',
  error: '',
};

export const fetchTokens = createAsyncThunk(
  'usersetting/fetchTokens',
  async () => {
    const access_token = await asyncStorageService(ACCESS_TOKEN, '', 'GET');
    const refresh_token = await asyncStorageService(REFRESH_TOKEN, '', 'GET');

    if (access_token !== '' && refresh_token !== '') {
      const tokens = {acc: access_token, ref: refresh_token};
      return tokens;
    } else {
      //TODO - connect with server
    }
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
    const temp = {
      vol: await asyncStorageService(VOLUME_KEY, '', 'GET'),
      voi: await asyncStorageService(VOICE_KEY, '', 'GET'),
      lang: await asyncStorageService(LANGUAGE_KEY, '', 'GET'),
    };
    return temp;
  },
);

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
  extraReducers: builder => {
    builder.addCase(fetchTokens.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchTokens.fulfilled, (state, action) => {
      if (action.payload) {
        state.access = action.payload.acc;
        state.refresh = action.payload.ref;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchTokens.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
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
        state.volume = action.payload.vol;
        state.voice = action.payload.voi;
        state.language = action.payload.lang;
      }
      state.status = 'succeeded';
    });
    builder.addCase(postSettings.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
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
