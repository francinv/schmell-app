import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {questionType} from './question';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Store: undefined;
  GameSettings: {
    selectedGameId: number;
  };
  Game: {
    questions: questionType[];
  };
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
export type GameSettingsRouteProp = RouteProp<
  RootStackParamList,
  'GameSettings'
>;
export type GameScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Game'
>;
export type GameRouteProp = RouteProp<RootStackParamList, 'Game'>;
