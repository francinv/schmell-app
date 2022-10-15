/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, Pressable, useWindowDimensions, View} from 'react-native';
import {GameScreenNavigationProp} from '../../types/navigation';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import gamePlayStyles from './style';
import {lockPortrait} from '../../utils/orientation';
import {useSelector} from 'react-redux';
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectFirstQuestionId,
  selectIsLast,
  selectGamePlayQuestions,
  selectInnerGameIndex,
  selectInnerGamePlayList,
  selectPlayers,
  selectIsDeckCardShown,
} from '../../features/selectors';
import {useAppDispatch} from '../../features/hooks';
import {parseFunctionChallenges} from '../../utils/parsers';
import actionDispatch from '../../features/dispatch';
import {isInGameCarousel} from '../../utils/question';

interface CarouselProps {
  moveAnimation: Animated.Value;
  isCountDownDone: boolean;
  setCountDownDone: (value: boolean) => void;
}

const Carousel: FC<CarouselProps> = ({
  moveAnimation,
  isCountDownDone,
  setCountDownDone,
}) => {
  const navigation = useNavigation<GameScreenNavigationProp>();
  const {width, height} = useWindowDimensions();

  const isLast = useSelector(selectIsLast);
  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const questions = useSelector(selectGamePlayQuestions);
  const firstId = useSelector(selectFirstQuestionId);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const inGameIndex = useSelector(selectInnerGameIndex);
  const inGameList = useSelector(selectInnerGamePlayList);
  const players = useSelector(selectPlayers);
  const showCard = useSelector(selectIsDeckCardShown);

  const {
    setCurrentIndex,
    setInnerCarousel,
    setInnerIndex,
    setIsShown,
    setDisabled,
  } = actionDispatch(useAppDispatch());

  useEffect(() => {
    if (isInGameCarousel(currentQuestion?.type) && currentQuestion?.function) {
      const listOfChallenges = parseFunctionChallenges(
        currentQuestion?.function,
      );
      if (!(inGameIndex + 1 > listOfChallenges?.length)) {
        setInnerCarousel(listOfChallenges);
      }
    }

    if (currentQuestion?.type === 'Laveste kortet') {
      const listOfChallenges = [...Array(players.length).keys()];
      if (!(inGameIndex + 1 > listOfChallenges?.length)) {
        setInnerCarousel(listOfChallenges);
      }
    }
  }, [currentQuestion, inGameIndex]);

  const isFirstQuestion = () => {
    if (isLast) {
      return false;
    }
    return currentQuestion.id === firstId || firstId === 0;
  };

  const handleExit = () => {
    navigation.goBack();
    lockPortrait();
  };

  const handlePrev = () => {
    isFirstQuestion()
      ? handleExit()
      : carouselPrev({
          moveAnimationValue: moveAnimation,
          currentState: {
            firstId,
            currentIndex,
            currentQuestionType: currentQuestion?.type,
            currentInGameIndex: inGameIndex,
          },
          dispatchers: {
            setIndex: setCurrentIndex,
            setInGameIndex: setInnerIndex,
          },
        });
  };

  const handleNext = () => {
    carouselNext({
      moveAnimationValue: moveAnimation,
      currentState: {
        currentIndex: currentIndex,
        questionList: questions,
        currentQuestionType: currentQuestion?.type,
        inGameList: inGameList,
        inGameIndex: inGameIndex,
        isCountDownDone: isCountDownDone,
      },
      dispatchers: {
        setIndex: setCurrentIndex,
        setInGameIndex: setInnerIndex,
        setCountDownDone: setCountDownDone,
        setIsCardVisible: setIsShown,
        setIsCardDisabled: setDisabled,
      },
    });
  };

  return (
    <View
      style={[
        gamePlayStyles.carouselContainer,
        {width: width, zIndex: showCard ? 100 : -50},
      ]}>
      <Pressable
        onPress={handlePrev}
        style={[gamePlayStyles.carouselPrev, {height: height}]}>
        <View style={{backgroundColor: 'white'}} />
      </Pressable>
      <Pressable
        disabled={isLast}
        onPress={handleNext}
        style={gamePlayStyles.carouselNext}
      />
    </View>
  );
};

export default Carousel;
