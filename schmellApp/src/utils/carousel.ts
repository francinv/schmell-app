import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';
import {carouselType} from '../components/Game/GamePlay';
import {colorList} from '../constants/colors';
import {getRandomNumber} from './numberUtil';

export const carouselPrev = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
  moveAnim: Animated.Value,
) => {
  if (carouselState.firstQuestionId === 0) {
    return;
  }
  while (true) {
    let newColorIndex = getRandomNumber(colorList.length);
    if (carouselState.currentColor !== newColorIndex) {
      Animated.timing(moveAnim, {
        toValue: -600,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setCarouselState({
          ...carouselState,
          currentColor: newColorIndex,
          currentQuestionIndex: carouselState.currentQuestionIndex - 1,
        });
        moveAnim.setValue(600);
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      });
      break;
    }
  }
};

export const carouselNext = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
  moveAnim: Animated.Value,
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
      Animated.timing(moveAnim, {
        toValue: 600,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setCarouselState({
          ...carouselState,
          currentColor: newColorIndex,
          currentQuestionIndex: carouselState.currentQuestionIndex + 1,
          firstQuestionId: carouselState.questionList[0].id,
        });
        moveAnim.setValue(-600);
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      });
      break;
    }
  }
};
