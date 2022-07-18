import React, {Dispatch, FC, SetStateAction} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import {carouselNext, carouselPrev} from '../../utils/carousel';
import {getPunishmentText} from '../../utils/textBuilders';
import {carouselType} from './GamePlay';

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
    <View
      style={[
        layoutStyles.flex_column,
        layoutStyles.flex_center,
        marginStyles.m_ver_auto,
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
      {/* <TouchableOpacity
        onPress={() => {
          isFirstQuestion()
            ? navigation.goBack()
            : carouselPrev(carouselState, setCarouselState);
        }} style={{flex: 1, backgroundColor: 'black', top: 30, height: 250, position: 'absolute'}}>
        <View style={{backgroundColor: 'black'}} />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isLast}
        onPress={() => {
          carouselNext(carouselState, setCarouselState);
        }}
        style={{flex: 1, backgroundColor: 'white'}}
      /> */}
    </View>
  );
};

export default QuestionsComponent;
