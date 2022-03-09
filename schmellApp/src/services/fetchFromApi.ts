import {GAME_KEY, QUESTIONS_KEY, WEEKS_KEY} from '../constants/common';
import {asyncStorageService} from '../utils/updateAsyncStorage';
import axiosService from './axios';

export async function fetchFromAPI() {
  const game_axe = axiosService.get('game/');
  const games_res = await game_axe.then(res => res.data);
  const question_axe = axiosService.get('question/');
  const question_res = await question_axe.then(res => res.data);
  const week_axe = axiosService.get('week/');
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
