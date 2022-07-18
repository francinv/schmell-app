import React, {Dispatch, FC, SetStateAction} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import {carouselType} from './GameComponent';

interface QuestionsProps {
  carouselState: carouselType;
  setCarouselState: Dispatch<SetStateAction<carouselType>>;
  navigation: any;
}

const QuestionsComponent: FC<QuestionsProps> = ({
  carouselState,
  setCarouselState,
  navigation,
}) => {
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
    <>
      <TouchableOpacity
        onPress={() => {
          isFirstQuestion()
            ? navigation.goBack()
            : carouselPrev(carouselState, setCarouselState);
        }}>
        <Text>Left carousel</Text>
      </TouchableOpacity>
      <Text>
        {isLast
          ? 'Ingen id'
          : carouselState.questionList[carouselState.currentQuestionIndex].id}
      </Text>
      <Text>
        {isLast
          ? 'Her var det tomt!'
          : carouselState.questionList[carouselState.currentQuestionIndex]
              .question_desc}
      </Text>
      <TouchableOpacity
        disabled={isLast}
        onPress={() => {
          carouselNext(carouselState, setCarouselState);
        }}>
        <Text>Right carousel</Text>
      </TouchableOpacity>
    </>
  );
};

export default QuestionsComponent;
