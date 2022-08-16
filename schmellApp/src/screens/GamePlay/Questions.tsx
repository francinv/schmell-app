import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectGameStatus, selectLanguage} from '../../features/selectors';
import useColor from '../../hooks/useColor';
import useFunctionByType from '../../hooks/useFunctionByType';
import useLocale from '../../hooks/useLocale';
import {carouselType} from '../../typings/common';
import gamePlayStyles from './style';

interface QuestionsProps {
  carouselState: carouselType;
  moveAnimation: Animated.Value;
  isLast: boolean;
}

const Questions: FC<QuestionsProps> = ({
  carouselState,
  isLast,
  moveAnimation,
}) => {
  const lang = useSelector(selectLanguage);
  const gameStatus = useSelector(selectGameStatus);

  const lastTitle = useLocale(lang, 'GAME_END_TITLE');
  const loadingTitle = useLocale(lang, 'GAME_LOADING_TITLE');

  const currentQuestion =
    carouselState?.questionList[carouselState.currentQuestionIndex];

  const getContent = () => {
    if (gameStatus === 'loading') {
      return loadingTitle;
    } else {
      return isLast ? lastTitle : currentQuestion.type;
    }
  };

  return (
    <Animated.View
      style={[
        gamePlayStyles.questionContainer,
        {transform: [{translateX: moveAnimation}]},
      ]}>
      <Text
        style={[
          gamePlayStyles.questionText,
          {textShadowColor: useColor(currentQuestion?.type)},
        ]}>
        {getContent()}
      </Text>
      {useFunctionByType(currentQuestion, isLast)}
    </Animated.View>
  );
};

export default Questions;
