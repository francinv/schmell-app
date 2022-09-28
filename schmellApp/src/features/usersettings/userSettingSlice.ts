import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {LANGUAGE_KEY, SHOW_DETAIL_KEY, VOICE_KEY} from '../../constants/common';
import {asyncStorageService} from '../../services/asyncStorageService';
import {showDetailType, userSettings} from '../../typings/settings';
import {initialUserSettingsSlice} from '../../typings/state';

export const postSettings = createAsyncThunk(
  'usersetting/postSettings',
  async (data: userSettings) => {
    const {language, showDetail, voice} = data;
    await asyncStorageService(VOICE_KEY, 'SET', voice);
    await asyncStorageService(LANGUAGE_KEY, 'SET', language);
    await asyncStorageService(SHOW_DETAIL_KEY, 'SET', showDetail);
    return data;
  },
);

export const fetchSettings = createAsyncThunk(
  'usersetting/fetchSettings',
  async () => {
    return {
      voice: await asyncStorageService(VOICE_KEY, 'GET'),
      language: await asyncStorageService(LANGUAGE_KEY, 'GET'),
      showDetail: await asyncStorageService(SHOW_DETAIL_KEY, 'GET'),
    };
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
      await asyncStorageService(SHOW_DETAIL_KEY, 'SET', arrayAfterUpdate);
      return arrayAfterUpdate;
    } else {
      const arrayOfDetailShow = currentState.concat({id: id, show: show});
      await asyncStorageService(SHOW_DETAIL_KEY, 'SET', arrayOfDetailShow);
      return arrayOfDetailShow;
    }
  },
);

export const fetchDetail = createAsyncThunk(
  'userSetting/fetchDetail',
  async () => {
    return asyncStorageService(SHOW_DETAIL_KEY, 'GET');
  },
);

export const postVoice = createAsyncThunk(
  'usersetting/postVoice',
  async (data: string) => {
    await asyncStorageService(VOICE_KEY, 'SET', data);
    return data;
  },
);

export const postLanguage = createAsyncThunk(
  'usersetting/postLanguage',
  async (data: string) => {
    await asyncStorageService(LANGUAGE_KEY, 'SET', data);
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
  initialState: initialUserSettingsSlice,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(postVoice.fulfilled, (state, action) => {
      state.voice = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(postLanguage.fulfilled, (state, action) => {
      state.language = action.payload;
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
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      state.language = action.payload.language;
      state.showDetail = action.payload.showDetail;
      state.voice = action.payload.voice;
      state.status = 'succeeded';
    });
    builder.addCase(postSettings.fulfilled, (state, action) => {
      state.language = action.payload.language;
      state.showDetail = action.payload.showDetail;
      state.voice = action.payload.voice;
      state.status = 'succeeded';
    });
    builder
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
