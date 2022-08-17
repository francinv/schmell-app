import {questionType} from './questionTypes';

export type carouselType = {
  firstQuestionId: number;
  currentQuestionIndex: number;
  questionList: questionType[];
};

export type settingsStateType = {
  wantedSettings: 'ReadOut' | 'Teams' | '';
  show: boolean;
};

export type modalShowType = {
  show: boolean;
  modalType: 'H' | 'P' | '';
};
