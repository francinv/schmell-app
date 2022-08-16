import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';
import {carouselType} from '../typings/common';

export const carouselPrev = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
  moveAnim: Animated.Value,
) => {
  const {firstQuestionId, currentQuestionIndex} = carouselState;

  if (!firstQuestionId) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: 600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    setCarouselState({
      ...carouselState,
      currentQuestionIndex: currentQuestionIndex - 1,
    });
    moveAnim.setValue(-600);
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};

export const carouselNext = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
  moveAnim: Animated.Value,
) => {
  const {currentQuestionIndex, questionList} = carouselState;

  if (currentQuestionIndex + 1 > questionList.length) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: -600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    setCarouselState({
      ...carouselState,
      currentQuestionIndex: currentQuestionIndex + 1,
      firstQuestionId: questionList[0].id,
    });
    moveAnim.setValue(600);
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};
