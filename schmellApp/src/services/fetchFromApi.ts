import {GAME_KEY, QUESTIONS_KEY, WEEKS_KEY} from '../constants/common';
import {asyncStorageService} from '../utils/updateAsyncStorage';
import axiosService from './axios';
import {PATH_1_DEV, PATH_2_DEV, PATH_3_DEV} from '@env';

export async function fetchFromAPI() {
  const game_axe = axiosService.get(PATH_1_DEV);
  const games_res = await game_axe.then(res => res.data);
  const question_axe = axiosService.get(PATH_2_DEV);
  const question_res = await question_axe.then(res => res.data);
  const week_axe = axiosService.get(PATH_3_DEV);
  const week_res = await week_axe.then(res => res.data);
  if (games_res) {
    asyncStorageService(GAME_KEY, games_res, 'SET');
  }
  if (question_res) {
    asyncStorageService(QUESTIONS_KEY, question_res, 'SET');
  }
  if (week_res) {
    asyncStorageService(WEEKS_KEY, week_res, 'SET');
  }
}
