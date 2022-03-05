import {configureStore} from '@reduxjs/toolkit';
import GameSettingReducer from '../features/gamesettings/gameSettingSlice';
import GameReducer from '../features/game/gameSlice';
import UserSettingReducer from '../features/usersettings/userSettingSlice';

export const store = configureStore({
  reducer: {
    gamesetting: GameSettingReducer,
    game: GameReducer,
    usersetting: UserSettingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
