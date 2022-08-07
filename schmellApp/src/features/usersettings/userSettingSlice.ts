import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {LANGUAGE_KEY, SHOW_DETAIL_KEY, VOICE_KEY} from '../../constants/common';
import {asyncStorageService} from '../../services/asyncStorageService';
import {authService} from '../../services/axiosService';
import encryptedStorageService from '../../services/encryptedStorageService';
import {showDetailType, userSettings} from '../../typings/settingsTypes';
import {decrypt} from '../../utils/crypto';

const showDetail: showDetailType[] = [];

const initialState = {
  api_key: '',
  voice: 'F',
  showDetail,
  language: 'nb-NO',
  status: 'idle',
  error: '',
};

export const setTokens = createAsyncThunk(
  'usersetting/setTokens',
  async (id: string) => {
    return authService
      .post(decrypt('a2V5L2dlbmVyYXRlLw=='), {
        name: id,
      })
      .then(res => res.data);
  },
);

export const fetchSettings = createAsyncThunk(
  'usersetting/fetchSettings',
  async () => {
    return {
      voi: await asyncStorageService(VOICE_KEY, '', 'GET'),
      lang: await asyncStorageService(LANGUAGE_KEY, '', 'GET'),
    };
  },
);

export const fetchDetail = createAsyncThunk(
  'userSetting/fetchDetail',
  async () => {
    return asyncStorageService(SHOW_DETAIL_KEY, '', 'GET');
  },
);

export const postSettings = createAsyncThunk(
  'usersetting/postSettings',
  async (data: userSettings) => {
    await asyncStorageService(VOICE_KEY, data.voice, 'SET');
    await asyncStorageService(LANGUAGE_KEY, data.language, 'SET');
    await asyncStorageService(SHOW_DETAIL_KEY, data.showDetail, 'SET');
    return data;
  },
);

export const postDetail = createAsyncThunk(
  'userSetting/postDetail',
  async (data: {
    id: number;
    show: boolean;
    currentState: showDetailType[];
    update: boolean;
  }) => {
    const {id, show, currentState, update} = data;
    if (update) {
      const arrayAfterUpdate = currentState.map(item => {
        return item.id === id ? {id: id, show: show} : item;
      });
      await asyncStorageService(SHOW_DETAIL_KEY, arrayAfterUpdate, 'SET');
      return arrayAfterUpdate;
    } else {
      const arrayOfDetailShow = currentState.concat({id: id, show: show});
      await asyncStorageService(SHOW_DETAIL_KEY, arrayOfDetailShow, 'SET');
      return arrayOfDetailShow;
    }
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

const hasPrefix = (action: AnyAction, prefix: string) =>
  action.type.startsWith(prefix);
const isPending = (action: AnyAction) => action.type.endsWith('/pending');
const isRejected = (action: AnyAction) => action.type.endsWith('/rejected');

const isPendingAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isPending(action);
  };

const isRejectedAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isRejected(action);
  };

const UserSettingSlice = createSlice({
  name: 'usersetting',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setApiKey(state, action: PayloadAction<string>) {
      state.api_key = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(postSettings.fulfilled, (state, action) => {
      if (action.payload) {
        state.voice = action.payload.voice;
        state.language = action.payload.language;
      }
      state.status = 'succeeded';
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
    builder.addCase(postVoice.fulfilled, (state, action) => {
      if (action.payload) {
        state.voice = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(postLanguage.fulfilled, (state, action) => {
      if (action.payload) {
        state.language = action.payload;
      }
      state.status = 'succeeded';
    });
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.showDetail = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(postDetail.fulfilled, (state, action) => {
      state.showDetail = action.payload;
      state.status = 'succeeded';
    });
    builder
      .addCase(fetchSettings.fulfilled, (state, action) => {
        if (action.payload) {
          state.voice = action.payload.voi;
          state.language = action.payload.lang;
        }
        state.status = 'succeeded';
      })
      .addMatcher(isPendingAction('usersetting/'), state => {
        state.status = 'loading';
        state.error = '';
      })
      .addMatcher(isRejectedAction('usersetting/'), (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setStatus} = UserSettingSlice.actions;

export default UserSettingSlice.reducer;
