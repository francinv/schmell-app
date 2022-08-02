import React, {FC} from 'react';
import {Animated, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage, selectPlayers} from '../../features/selectors';
import useColor from '../../hooks/useColor';
import useLocale from '../../hooks/useLocale';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {carouselType} from './GamePlay';
import useQuestionType from '../../hooks/useQuestionType';
import paddingStyles from '../../styles/padding.styles';
import {playerPush} from '../../utils/selectPlayer';

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
  const players = useSelector(selectPlayers);
  const title = useLocale(lang, 'GAME_END_TITLE');
  const information = useLocale(lang, 'GAME_END_INFORMATION');
  const currentQuestion =
    carouselState?.questionList[carouselState.currentQuestionIndex];
  const questionsContent = isLast ? information : currentQuestion.question_desc;

  return (
    <Animated.View
      style={[
        marginStyles.m_ver_auto,
        marginStyles.m_hor_auto,
        widthStyles(0).w_max_70,
        layoutStyles.flex_center,
        {transform: [{translateX: moveAnim}]},
      ]}>
      <Text
        style={[
          colorStyles.color_tertiary,
          textStyles.text_font_primary,
          textStyles.text_45,
          textStyles.text_type_shadow,
          paddingStyles.py_10,
          {
            textShadowColor: useColor(currentQuestion?.type),
          },
          widthStyles(0).w_p_100,
        ]}>
        {isLast ? title : currentQuestion.type}
      </Text>
      {useQuestionType(
        playerPush(questionsContent as string, players),
        currentQuestion,
      )}
    </Animated.View>
  );
};

export default QuestionsComponent;
