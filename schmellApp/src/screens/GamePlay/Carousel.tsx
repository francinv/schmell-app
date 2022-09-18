/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
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
} from '../../features/selectors';
import {Dispatch} from '@reduxjs/toolkit';
import {setId, setIndex} from '../../features/gameplay/gamePlaySlice';
import {useAppDispatch} from '../../features/hooks';

interface CarouselProps {
  moveAnimation: Animated.Value;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setCurrentIndex: (index: number) => dispatch(setIndex(index)),
  setFirstId: (id: number) => dispatch(setId(id)),
});

const Carousel: FC<CarouselProps> = ({moveAnimation}) => {
  const navigation = useNavigation<GameScreenNavigationProp>();
  const {width, height} = useWindowDimensions();

  const isLast = useSelector(selectIsLast);
  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const questions = useSelector(selectGamePlayQuestions);
  const firstId = useSelector(selectFirstQuestionId);
  const currentQuestion = useSelector(selectCurrentQuestion);

  const {setCurrentIndex, setFirstId} = actionDispatch(useAppDispatch());

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
      : carouselPrev(firstId, currentIndex, setCurrentIndex, moveAnimation);
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
          )
        }
        style={gamePlayStyles.carouselNext}
      />
    </View>
  );
};

export default Carousel;
