import {gameType} from './game';
import {questionType} from './question';
import {weekType} from './week';

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
