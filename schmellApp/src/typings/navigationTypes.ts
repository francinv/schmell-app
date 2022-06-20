import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Store: undefined;
  GameSettings: undefined;
  Game: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;
export type StoreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Store'
>;
export type GameSettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GameSettings'
>;
export type GameScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Game'
>;
