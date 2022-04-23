import {GAME_KEY, QUESTIONS_KEY, WEEKS_KEY} from '../constants/common';
import {asyncStorageService} from '../utils/updateAsyncStorage';
import axiosService from './axios';
import {decrypt} from '../utils/crypto';

export async function fetchFromAPI() {
  const game_axe = axiosService.get(decrypt('Z2FtZS8='));
  const games_res = await game_axe.then(res => res.data);
  const question_axe = axiosService.get(decrypt('cXVlc3Rpb24v'));
  const question_res = await question_axe.then(res => res.data);
  const week_axe = axiosService.get(decrypt('d2Vlay8='));
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
