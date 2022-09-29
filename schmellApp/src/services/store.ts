import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import GameSettingReducer from '../features/gamesettings/gameSettingSlice';
import UserSettingReducer from '../features/usersettings/userSettingSlice';
import GamePlayReducer from '../features/gameplay/gamePlaySlice';
import {apiService} from './apiService';

export const store = configureStore({
  reducer: {
    gamesetting: GameSettingReducer,
    usersetting: UserSettingReducer,
    gamePlay: GamePlayReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
