import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectVolume} from '../../../features/selectors';
import colorStyles from '../../../styles/color.styles';
import globalStyles from '../../../styles/global.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import textStyles from '../../../styles/text.styles';
import widthStyles from '../../../styles/width.styles';
import {
  SoundHighIconButton,
  SoundLowIconButton,
} from '../../Buttons/IconButtons';
import InputContainer from './InputContainer';
import SubTitle from './SubTitle';

const Volume: React.FC = () => {
  const volume = useSelector(selectVolume);

  return (
    <InputContainer>
      <SubTitle title="Lydnivå" />
      <View
        style={[
          layoutStyles.flex_row,
          layoutStyles.align_center,
          layoutStyles.justify_center,
          marginStyles.mt_15,
        ]}>
        <SoundLowIconButton volume={volume} />
        <View
          style={[
            colorStyles.bg_primary,
            layoutStyles.flex_center,
            globalStyles.border_radius_8,
            widthStyles(40).w_custom,
            heightStyles(40).h_custom,
            marginStyles.m_hor_14,
          ]}>
          <Text
            style={[
              textStyles.text_25,
              colorStyles.bg_primary,
              globalStyles.border_radius_8,
              colorStyles.color_secondary,
              textStyles.text_font_secondary,
            ]}>
            {volume}
          </Text>
        </View>
        <SoundHighIconButton volume={volume} />
      </View>
    </InputContainer>
  );
};

export default Volume;
