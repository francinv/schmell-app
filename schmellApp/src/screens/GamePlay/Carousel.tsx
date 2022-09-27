/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, Pressable, useWindowDimensions, View} from 'react-native';
import {GameScreenNavigationProp} from '../../typings/navigation';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import gamePlayStyles from './style';
import {lockPortrait} from '../../utils/orientationLocker';
import {useSelector} from 'react-redux';
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectFirstQuestionId,
  selectIsLast,
  selectGamePlayQuestions,
  selectInnerGameIndex,
  selectInnerGamePlayList,
} from '../../features/selectors';
import {Dispatch} from '@reduxjs/toolkit';
import {
  setId,
  setIndex,
  setInnerGameIndex,
  setInnerGamePlayList,
} from '../../features/gameplay/gamePlaySlice';
import {useAppDispatch} from '../../features/hooks';
import {parseFunctionChallenges} from '../../utils/parsers';

interface CarouselProps {
  moveAnimation: Animated.Value;
  isCountDownDone: boolean;
  setCountDownDone: (value: boolean) => void;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setCurrentIndex: (index: number) => dispatch(setIndex(index)),
  setFirstId: (id: number) => dispatch(setId(id)),
  setInnerCarousel: (challenges: string[]) =>
    dispatch(setInnerGamePlayList(challenges)),
  setInnerIndex: (index: number) => dispatch(setInnerGameIndex(index)),
});

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

  const isInGameCarouselType =
    currentQuestion?.type === 'Mimic Challenge' ||
    currentQuestion?.type === 'Instant Spoilers' ||
    currentQuestion?.type === 'Laveste kortet';

  const {setCurrentIndex, setFirstId, setInnerCarousel, setInnerIndex} =
    actionDispatch(useAppDispatch());

  useEffect(() => {
    if (isInGameCarouselType && currentQuestion?.function) {
      const listOfChallenges = parseFunctionChallenges(
        currentQuestion?.function,
      );
      if (!(inGameIndex + 1 > listOfChallenges.length)) {
        setInnerCarousel(listOfChallenges);
      }
    }
  }, [isInGameCarouselType, currentQuestion, inGameIndex]);

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

  const handlePrevPress = () => {
    isFirstQuestion()
      ? handleExit()
      : carouselPrev(
          firstId,
          currentIndex,
          setCurrentIndex,
          moveAnimation,
          isInGameCarouselType,
          setInnerIndex,
          inGameIndex,
        );
  };

  return (
    <View style={[gamePlayStyles.carouselContainer, {width: width}]}>
      <Pressable
        onPress={handlePrevPress}
        style={[gamePlayStyles.carouselPrev, {height: height - 140}]}>
        <View style={{backgroundColor: 'white'}} />
      </Pressable>
      <Pressable
        disabled={isLast}
        onPress={() =>
          carouselNext(
            moveAnimation,
            currentIndex,
            questions,
            setCurrentIndex,
            setFirstId,
            isInGameCarouselType,
            setInnerIndex,
            inGameList,
            inGameIndex,
            isCountDownDone,
            setCountDownDone,
          )
        }
        style={gamePlayStyles.carouselNext}
      />
    </View>
  );
};

export default Carousel;
