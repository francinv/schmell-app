import {questionType} from './question';
import {showDetailType} from './settings';

const questionList: questionType[] = [];
const innerGamePlayList: string[] = [];

export const initialGameSlice = {
  selectedGameId: 0,
  selectedWeekId: 0,
  questionList,
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
  voice: 'F',
  showDetail,
  language: 'nb-NO',
  status: 'idle',
  error: '',
};

type statusType = 'idle' | 'failed' | 'succeeded';
const status: statusType = 'idle' as statusType;

export const initialGamePlaySlice = {
  status,
  firstQuestionId: 0,
  currentQuestionIndex: 0,
  questionList,
  innerGamePlayList,
  innerGamePlayIndex: 0,
};
