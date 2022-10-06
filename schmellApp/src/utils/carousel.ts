import {Animated} from 'react-native';
import {question} from '../types/question';
import {isInGameCarousel} from './question';

type carouselPrevProps = {
  moveAnimationValue: Animated.Value;
  currentState: {
    firstId: number;
    currentIndex: number;
    currentQuestionType: question['type'];
    currentInGameIndex: number;
  };
  dispatchers: {
    setIndex: (index: number) => void;
    setInGameIndex: (index: number) => void;
  };
};

type carouselNextProps = {
  moveAnimationValue: Animated.Value;
  currentState: {
    currentIndex: number;
    questionList: question[];
    currentQuestionType: question['type'];
    inGameList: string[] | number[];
    inGameIndex: number;
    isCountDownDone: boolean;
  };
  dispatchers: {
    setIndex: (index: number) => void;
    setInGameIndex: (index: number) => void;
    setCountDownDone: (query: boolean) => void;
    setIsCardVisible: (query: boolean) => void;
    setIsCardDisabled: (query: boolean) => void;
  };
};

export const carouselPrev = (props: carouselPrevProps) => {
  const {currentInGameIndex, currentIndex, currentQuestionType, firstId} =
    props.currentState;
  const {setInGameIndex, setIndex} = props.dispatchers;
  const {moveAnimationValue} = props;

  if (!firstId) {
    return;
  }

  Animated.timing(moveAnimationValue, {
    toValue: 600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    if (isInGameCarousel(currentQuestionType) && currentInGameIndex > 0) {
      setInGameIndex(currentInGameIndex - 1);
    } else {
      setIndex(currentIndex - 1);
    }
    moveAnimationValue.setValue(-600);
    Animated.timing(moveAnimationValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};

export const carouselNext = (props: carouselNextProps) => {
  const {
    currentIndex,
    currentQuestionType,
    inGameIndex,
    inGameList,
    isCountDownDone,
    questionList,
  } = props.currentState;
  const {
    setCountDownDone,
    setInGameIndex,
    setIndex,
    setIsCardDisabled,
    setIsCardVisible,
  } = props.dispatchers;
  const {moveAnimationValue} = props;

  if (currentIndex + 1 > questionList.length) {
    return;
  }

  Animated.timing(moveAnimationValue, {
    toValue: -600,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    if (currentQuestionType === 'Laveste kortet') {
      setIsCardVisible(false);
      setIsCardDisabled(false);
    }
    if (
      isInGameCarousel(currentQuestionType) &&
      !(inGameIndex === inGameList.length - 1) &&
      !isCountDownDone
    ) {
      setInGameIndex(inGameIndex + 1);
    } else {
      if (
        isInGameCarousel(currentQuestionType) &&
        inGameIndex === inGameList.length - 1
      ) {
        setInGameIndex(0);
      }
      setIndex(currentIndex + 1);
    }
    moveAnimationValue.setValue(600);
    setCountDownDone(false);
    Animated.timing(moveAnimationValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};
