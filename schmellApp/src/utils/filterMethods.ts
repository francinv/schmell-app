import {questionType} from '../typings/questionTypes';
import _ from 'lodash';

export const randomizeList = (listToRandomize: questionType[]) =>
  _.shuffle(listToRandomize);

export const filterByPhase = (
  listToFilter: questionType[],
  wantedPhase: number,
) => listToFilter.filter(question => question.phase === wantedPhase);
