import {Dispatch} from '@reduxjs/toolkit';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {setReadOut} from '../../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../../features/hooks';
import {selectReadOut} from '../../../features/selectors';
import colorStyles from '../../../styles/color.styles';
import globalStyles from '../../../styles/global.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import textStyles from '../../../styles/text.styles';
import widthStyles from '../../../styles/width.styles';
import ToggleButton from '../../Buttons/ToggleButton';
import LinearGradientBorder from '../../StyleComponents/LinearGradientBorder';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  readOut: (query: boolean) => dispatch(setReadOut(query)),
});

const ReadOut: FC = () => {
  const {readOut} = actionDispatch(useAppDispatch());
  const isReadOut = useSelector(selectReadOut);

  function handlePress(editReadOut: boolean) {
    readOut(editReadOut);
  }

  function isSelected(content: boolean) {
    return isReadOut === content;
  }

  function parseContent(content: boolean) {
    return content === true ? 'Ja' : 'Nei';
  }
  return (
    <View
      style={[
        widthStyles(0).w_p_90,
        marginStyles.mt_20,
        marginStyles.m_hor_auto,
      ]}>
      <Text
        style={[
          textStyles.text_font_primary,
          textStyles.text_25,
          colorStyles.color_tertiary,
          marginStyles.mb_20,
        ]}>
        Opplesning?
      </Text>
      <LinearGradientBorder width={'70%'}>
        <View
          style={[
            widthStyles(0).w_p_99,
            colorStyles.bg_quinary,
            globalStyles.border_radius_100,
            heightStyles(0).h_p_96,
            layoutStyles.flex_row,
            layoutStyles.align_center,
          ]}>
          <ToggleButton
            amountOfElements={2}
            content={parseContent(true)}
            handlePress={() => handlePress(true)}
            selected={isSelected(true)}
            directionOfAnimation={undefined}
          />
          <ToggleButton
            amountOfElements={2}
            content={parseContent(false)}
            handlePress={() => handlePress(false)}
            selected={isSelected(false)}
            directionOfAnimation={undefined}
          />
        </View>
      </LinearGradientBorder>
    </View>
  );
};

export default ReadOut;
