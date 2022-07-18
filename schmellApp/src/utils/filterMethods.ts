import {questionType} from '../typings/questionTypes';
import _ from 'lodash';

export const randomizeList = (listToRandomize: questionType[]) =>
  _.shuffle(listToRandomize);
