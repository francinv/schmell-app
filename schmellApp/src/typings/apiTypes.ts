import {gameType} from './gameTypes';
import {questionType} from './questionTypes';
import {weekType} from './weekTypes';

export type AuthResponse = {
  key: string;
  api_key: string;
};

export type AuthData = {
  name: string;
};

export type GameResponse = Array<gameType>;

export type WeekResponse = Array<weekType>;

export type WeekFilters = {
  weekNumber: number;
  idGame: number;
};

export type QuestionResponse = Array<questionType>;

export type QuestionFilter = {
  idWeek: number;
};

export type AddPlayerFilter = {
  questions: questionType[];
  players: string[];
};

export type AddInGameFilter = {
  currentIndex: number;
  players: string[];
  uneditedQuestions: questionType[];
  editedQuestions: questionType[];
};
