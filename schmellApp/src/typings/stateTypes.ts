import {gameType} from './gameTypes';
import {questionType} from './questionTypes';
import {showDetailType} from './settingsTypes';
import {weekType} from './weekTypes';

const games: gameType[] = [];
const week: weekType = {
  id: 0,
  week_number: 0,
  game: 0,
};
const questions: questionType[] = [];
const selectedGame: gameType = {
  id: 0,
  name: '',
  description: '',
  related_question: false,
  last_updated: '',
  status: '',
  logo: '',
  release_date: '',
};

export const initialGameSlice = {
  games,
  week,
  questions,
  selectedGame,
  status: 'idle',
  error: '',
};

const players: string[] = [];

export const initialGameSettingSlice = {
  players,
  teams: 0,
  readOut: false,
  lastPlayer: '',
};

const showDetail: showDetailType[] = [];

export const initialUserSettingsSlice = {
  apiKey: '',
  voice: 'F',
  showDetail,
  language: 'nb-NO',
  status: 'idle',
  error: '',
};
