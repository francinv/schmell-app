import {Animated} from 'react-native';
import {questionType} from '../types/question';

export const carouselPrev = (
  firstId: number,
  currentIndex: number,
  setIndex: any,
  moveAnim: Animated.Value,
  isInGameCarousel: boolean,
  setInGameIndex: any,
  inGameIndex: number,
) => {
  if (!firstId) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: 600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    if (isInGameCarousel && inGameIndex > 0) {
      setInGameIndex(inGameIndex - 1);
    } else {
      setIndex(currentIndex - 1);
    }
    moveAnim.setValue(-600);
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};

export const carouselNext = (
  moveAnim: Animated.Value,
  currentIndex: number,
  questionList: questionType[],
  setIndex: any,
  setId: any,
  isInGameCarousel: boolean,
  setInGameIndex: any,
  inGameList: string[] | number[],
  inGameIndex: number,
  isCountDownDone: boolean,
  setCountDownDone: (done: boolean) => void,
) => {
  if (currentIndex + 1 > questionList.length) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: -600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    if (
      isInGameCarousel &&
      !(inGameIndex === inGameList.length - 1) &&
      !isCountDownDone
    ) {
      setInGameIndex(inGameIndex + 1);
    } else {
      if (isInGameCarousel && inGameIndex === inGameList.length - 1) {
        setInGameIndex(0);
      }
      setIndex(currentIndex + 1);
      setId(questionList[0].id);
    }
    moveAnim.setValue(600);
    setCountDownDone(false);
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};
