import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import {getPunishmentText} from '../../utils/textBuilders';
import {carouselType} from './GamePlay';

interface QuestionsProps {
  carouselState: carouselType;
  moveAnim: Animated.Value;
}

const QuestionsComponent: FC<QuestionsProps> = ({carouselState, moveAnim}) => {
  return (
    <Animated.View
      style={[
        layoutStyles.flex_column,
        layoutStyles.flex_center,
        marginStyles.m_ver_auto,
        {transform: [{translateX: moveAnim}]},
      ]}>
      <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_primary,
          textStyles.text_center,
          textStyles.text_50,
          paddingStyles.p_10,
          textStyles.text_shadow,
        ]}>
        {carouselState.questionList[carouselState.currentQuestionIndex].type}
      </Text>
      <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_secondary,
          textStyles.text_30,
          textStyles.font_500,
        ]}>
        {
          carouselState.questionList[carouselState.currentQuestionIndex]
            .question_desc
        }
      </Text>
      <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_secondary,
          textStyles.font_600,
          marginStyles.mt_10,
          textStyles.text_underline,
        ]}>
        {getPunishmentText(
          carouselState.questionList[carouselState.currentQuestionIndex],
        )}
      </Text>
    </Animated.View>
  );
};

export default QuestionsComponent;
