/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, FC, SetStateAction} from 'react';
import {
  Animated,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import globalStyles from '../../styles/global.styles';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import {carouselType} from './GamePlay';

interface CarouselProps {
  carouselState: carouselType;
  setCarouselState: Dispatch<SetStateAction<carouselType>>;
  navigation: any;
  moveAnim: Animated.Value;
  isLast: boolean;
}

const Carousel: FC<CarouselProps> = ({
  carouselState,
  setCarouselState,
  navigation,
  moveAnim,
  isLast,
}) => {
  const {width, height} = useWindowDimensions();
  const {currentQuestionIndex, questionList, firstQuestionId} = carouselState;
  const isFirstQuestion = () => {
    if (isLast) {
      return false;
    }
    if (questionList[currentQuestionIndex].id === firstQuestionId) {
      return true;
    }
    if (carouselState.firstQuestionId === 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={[globalStyles.carouselView, {width: width}]}>
      <TouchableOpacity
        onPress={() => {
          isFirstQuestion()
            ? navigation.goBack()
            : carouselPrev(carouselState, setCarouselState, moveAnim);
        }}
        style={{
          flex: 1,
          height: height - 140,
          zIndex: 100,
        }}>
        <View style={{backgroundColor: 'white'}} />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isLast}
        onPress={() => carouselNext(carouselState, setCarouselState, moveAnim)}
        style={{flex: 1, zIndex: 101}}
      />
    </View>
  );
};

export default Carousel;
