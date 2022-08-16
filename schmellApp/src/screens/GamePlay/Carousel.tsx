/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, FC, SetStateAction} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, Pressable, useWindowDimensions, View} from 'react-native';
import {carouselType} from '../../typings/common';
import {GameScreenNavigationProp} from '../../typings/navigationTypes';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import gamePlayStyles from './style';
import {lockPortrait} from '../../utils/orientationLocker';

interface CarouselProps {
  carouselState: carouselType;
  setCarouselState: Dispatch<SetStateAction<carouselType>>;
  moveAnimation: Animated.Value;
  isLast: boolean;
}

const Carousel: FC<CarouselProps> = props => {
  const {carouselState, isLast, moveAnimation, setCarouselState} = props;

  const navigation = useNavigation<GameScreenNavigationProp>();
  const {width, height} = useWindowDimensions();

  const {currentQuestionIndex, questionList, firstQuestionId} = carouselState;

  const isFirstQuestion = () => {
    if (isLast) {
      return false;
    }
    return (
      questionList[currentQuestionIndex].id === firstQuestionId ||
      carouselState.firstQuestionId === 0
    );
  };

  const handleExit = () => {
    navigation.goBack();
    lockPortrait();
  };

  const handlePrevPress = () => {
    isFirstQuestion()
      ? handleExit()
      : carouselPrev(carouselState, setCarouselState, moveAnimation);
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
          carouselNext(carouselState, setCarouselState, moveAnimation)
        }
        style={gamePlayStyles.carouselNext}
      />
    </View>
  );
};

export default Carousel;
