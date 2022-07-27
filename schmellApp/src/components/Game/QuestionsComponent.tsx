import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useColor from '../../hooks/useColor';
import useFunction from '../../hooks/useFunction';
import useLocale from '../../hooks/useLocale';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {carouselType} from './GamePlay';

interface QuestionsProps {
  carouselState: carouselType;
  moveAnim: Animated.Value;
  isLast: boolean;
}

const QuestionsComponent: FC<QuestionsProps> = ({
  carouselState,
  moveAnim,
  isLast,
}) => {
  const lang = useSelector(selectLanguage);
  const title = useLocale(lang, 'GAME_END_TITLE');
  const information = useLocale(lang, 'GAME_END_INFORMATION');
  const currentQuestion =
    carouselState.questionList[carouselState.currentQuestionIndex];
  const questionsContent = isLast ? information : currentQuestion.question_desc;

  return (
    <Animated.View
      style={[
        layoutStyles.flex_column,
        layoutStyles.flex_center,
        marginStyles.m_ver_auto,
        widthStyles(0).w_p_70,
        marginStyles.m_hor_auto,
        {transform: [{translateX: moveAnim}], zIndex: 10, position: 'relative'},
      ]}>
      <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_primary,
          textStyles.text_center,
          textStyles.text_50,
          paddingStyles.p_10,
          textStyles.text_type_shadow,
          textStyles.spacing,
          {textShadowColor: useColor(currentQuestion.type)},
        ]}>
        {isLast ? title : currentQuestion.type}
      </Text>
      {useFunction(questionsContent as string, currentQuestion.type)}
    </Animated.View>
  );
};

export default QuestionsComponent;
