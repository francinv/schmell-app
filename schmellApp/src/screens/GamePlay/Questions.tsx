import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  selectCurrentQuestion,
  selectIsLast,
  selectLanguage,
} from '../../features/selectors';
import useColor from '../../hooks/useColor';
import useFunctionByType from '../../hooks/useFunctionByType';
import useLocale from '../../hooks/useLocale';
import gamePlayStyles from './style';

interface QuestionsProps {
  moveAnimation: Animated.Value;
  isLoading: boolean;
}

const Questions: FC<QuestionsProps> = ({moveAnimation, isLoading}) => {
  const lang = useSelector(selectLanguage);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const isLast = useSelector(selectIsLast);

  const lastTitle = useLocale(lang, 'GAME_END_TITLE');
  const loadingTitle = useLocale(lang, 'GAME_LOADING_TITLE');

  const isInGameCarouselType =
    currentQuestion.type === 'Mimic Challenge' ||
    currentQuestion.type === 'Instant Spoilers' ||
    currentQuestion.type === 'Laveste kortet';

  const getContent = () => {
    if (isLoading) {
      return loadingTitle;
    } else {
      return isLast ? lastTitle : currentQuestion.type;
    }
  };

  const NormalCarousel = (
    <>
      <Text
        style={[
          gamePlayStyles.questionText,
          {textShadowColor: useColor(currentQuestion?.type)},
        ]}>
        {getContent()}
      </Text>
      {useFunctionByType(currentQuestion, isLast, isLoading)}
    </>
  );

  return (
    <Animated.View
      style={[
        gamePlayStyles.questionContainer,
        {transform: [{translateX: moveAnimation}]},
      ]}>
      {!isInGameCarouselType && NormalCarousel}
    </Animated.View>
  );
};

export default Questions;
