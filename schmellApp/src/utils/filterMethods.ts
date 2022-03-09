import {gameType} from '../typings/gameTypes';
import {questionType} from '../typings/questionTypes';
import {weekType} from '../typings/weekTypes';
import _ from 'lodash';

export function filterList(
  currentWeek: number,
  weeks: weekType[],
  selectedGame: gameType,
  questions: questionType[],
) {
  var filteredByGameArray = questions.filter(function (value) {
    return value.related_game === selectedGame.id;
  });
  let wantedWeek = weeks?.find(function (value) {
    return value.game === selectedGame.id && value.week_number === currentWeek;
  });
  var filteredArray = filteredByGameArray?.filter(function (value) {
    return value.related_week === wantedWeek?.id;
  });
  return filteredArray;
}

export function randomizeList(listToRandomize: any) {
  let randomizedList = _.shuffle(listToRandomize);
  return randomizedList;
}
