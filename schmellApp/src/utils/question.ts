import {question} from '../types/question';

export const isInGameCarousel = (type: question['type']) =>
  type === 'Mimic Challenge' ||
  type === 'Instant Spoilers' ||
  type === 'Laveste kortet';

export const isLowestCardType = (type: question['type']) =>
  type === 'Laveste kortet';
