import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../locale/useLocale';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
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
        {isLast
          ? title
          : carouselState.questionList[carouselState.currentQuestionIndex].type}
      </Text>
      <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_secondary,
          textStyles.text_30,
          textStyles.font_500,
        ]}>
        {isLast
          ? information
          : carouselState.questionList[carouselState.currentQuestionIndex]
              .question_desc}
      </Text>
      {/* <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_secondary,
          textStyles.font_600,
          marginStyles.mt_10,
          textStyles.text_underline,
        ]}>
        {isLast
          ? 'Kanskje prøve et annet spill?'
          : getPunishmentText(
              carouselState.questionList[carouselState.currentQuestionIndex],
            )}
      </Text> */}
    </Animated.View>
  );
};

export default QuestionsComponent;
