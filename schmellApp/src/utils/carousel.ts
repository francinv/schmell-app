import {Dispatch, SetStateAction} from 'react';
import {carouselType} from '../components/Game/GameComponent';
import {colorList} from '../constants/colors';
import {getRandomNumber} from './numberUtil';

export const carouselPrev = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
) => {
  if (carouselState.firstQuestionId === 0) {
    return;
  }
  while (true) {
    let newColorIndex = getRandomNumber(colorList.length);
    if (carouselState.currentColor !== newColorIndex) {
      setCarouselState({
        ...carouselState,
        currentColor: newColorIndex,
        currentQuestionIndex: carouselState.currentQuestionIndex - 1,
      });
      break;
    }
  }
};

export const carouselNext = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
) => {
  if (
    carouselState.currentQuestionIndex + 1 >
    carouselState.questionList.length
  ) {
    return;
  }
  while (true) {
    let newColorIndex = getRandomNumber(colorList.length);
    if (carouselState.currentColor !== newColorIndex) {
      setCarouselState({
        ...carouselState,
        currentColor: newColorIndex,
        currentQuestionIndex: carouselState.currentQuestionIndex + 1,
        firstQuestionId: carouselState.questionList[0].id,
      });
      break;
    }
  }
};
