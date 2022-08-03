import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';
import {carouselType} from '../components/Game/GamePlay';

const subtractPhase = (currentPhase: 1 | 2 | 3) => {
  switch (currentPhase) {
    case 1:
      return 1;
    case 2:
      return 1;
    case 3:
      return 2;
    default:
      return 1;
  }
};

const addPhase = (currentPhase: 1 | 2 | 3) => {
  switch (currentPhase) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 3;
    default:
      return 1;
  }
};

export const carouselPrev = (
  carouselState: carouselType,
  setCarouselState: Dispatch<SetStateAction<carouselType>>,
  moveAnim: Animated.Value,
) => {
  const {firstQuestionId, currentQuestionIndex, questionCounter, currentPhase} =
    carouselState;

  const timeToChangePhase =
    questionCounter === 20 || questionCounter === 40 || questionCounter === 60;
  if (!firstQuestionId) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: -600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    setCarouselState({
      ...carouselState,
      currentQuestionIndex: currentQuestionIndex - 1,
      currentPhase: timeToChangePhase
        ? subtractPhase(currentPhase)
        : currentPhase,
      questionCounter: questionCounter ? questionCounter - 1 : questionCounter,
    });
    moveAnim.setValue(600);
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
  const {currentQuestionIndex, questionList, questionCounter, currentPhase} =
    carouselState;
  const timeToChangePhase = questionCounter === 20 || questionCounter === 40;

  if (currentQuestionIndex + 1 > questionList.length) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: 600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    setCarouselState({
      ...carouselState,
      currentQuestionIndex: currentQuestionIndex + 1,
      firstQuestionId: questionList[0].id,
      questionCounter: questionCounter + 1,
      currentPhase: timeToChangePhase ? addPhase(currentPhase) : currentPhase,
    });
    moveAnim.setValue(-600);
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};
