import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import GameSettingReducer from '../features/gamesettings/gameSettingSlice';
import GameReducer from '../features/game/gameSlice';
import UserSettingReducer from '../features/usersettings/userSettingSlice';
import GamePlayReducer from '../features/gameplay/gamePlaySlice';
import {apiService} from './apiService';

export const store = configureStore({
  reducer: {
    gamesetting: GameSettingReducer,
    game: GameReducer,
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
