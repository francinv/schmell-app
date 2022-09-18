import {Animated} from 'react-native';
import {questionType} from '../typings/question';

export const carouselPrev = (
  firstId: number,
  currentIndex: number,
  setIndex: any,
  moveAnim: Animated.Value,
) => {
  if (!firstId) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: 600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    setIndex(currentIndex - 1);
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
) => {
  if (currentIndex + 1 > questionList.length) {
    return;
  }

  Animated.timing(moveAnim, {
    toValue: -600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    setIndex(currentIndex + 1);
    setId(questionList[0].id);
    moveAnim.setValue(600);
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};
