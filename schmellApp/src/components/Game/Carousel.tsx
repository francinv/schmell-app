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
}

const Carousel: FC<CarouselProps> = ({
  carouselState,
  setCarouselState,
  navigation,
  moveAnim,
}) => {
  const {width, height} = useWindowDimensions();
  const isFirstQuestion = () => {
    if (isLast) {
      return;
    }
    if (
      carouselState.questionList[carouselState.currentQuestionIndex].id ===
      carouselState.firstQuestionId
    ) {
      return true;
    }
    if (carouselState.firstQuestionId === 0) {
      return true;
    }
  };
  const isLast =
    carouselState.currentQuestionIndex + 1 > carouselState.questionList.length;

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
        }}>
        <View style={{backgroundColor: 'white'}} />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isLast}
        onPress={() => {
          carouselNext(carouselState, setCarouselState, moveAnim);
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Carousel;
