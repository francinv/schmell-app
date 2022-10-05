import {gameType} from './game';
import {question} from './question';
import {showDetailType} from './settings';
import {weekType} from './week';

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

export type QuestionResponse = Array<question>;

export type QuestionFilter = {
  idWeek: number;
};

export type AddPlayerFilter = {
  questions: question[];
  players: string[];
};

export type AddInGameFilter = {
  currentIndex: number;
  players: string[];
  uneditedQuestions: question[];
  editedQuestions: question[];
};

export type PostDetailShow = {
  id: number;
  show: boolean;
  currentState: showDetailType[];
  update: boolean;
};
