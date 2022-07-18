import React, {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {colorList} from '../../constants/colors';
import {selectQuestions} from '../../features/selectors';
import layoutStyles from '../../styles/layout.styles';
import {questionType} from '../../typings/questionTypes';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import {randomizeList} from '../../utils/filterMethods';

export type carouselType = {
  firstQuestionId: number;
  currentQuestionIndex: number;
  currentColor: number;
  questionList: questionType[];
};

const GameComponent: FC = () => {
  const navigation = useNavigation();
  const questions = useSelector(selectQuestions);
  const [carouselState, setCarouselState] = useState<carouselType>({
    firstQuestionId: 0,
    currentQuestionIndex: 0,
    currentColor: 0,
    questionList: randomizeList(questions),
  });
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
    <SafeAreaView
      style={[
        layoutStyles.flex_1,
        {backgroundColor: colorList[carouselState.currentColor]},
      ]}>
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
    </SafeAreaView>
  );
};

export default GameComponent;
