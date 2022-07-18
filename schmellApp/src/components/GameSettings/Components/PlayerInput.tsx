import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import colorStyles from '../../../styles/color.styles';
import globalStyles from '../../../styles/global.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import paddingStyles from '../../../styles/padding.styles';
import textStyles from '../../../styles/text.styles';
import widthStyles from '../../../styles/width.styles';
import AddPlayerButton from '../../Buttons/AddPlayerButton';

interface InputProps {
  inputPlace: 'Settings' | 'InGame';
}

const PlayerInput: FC<InputProps> = ({inputPlace}) => {
  const [player, setPlayer] = useState('');

  const isSettings = inputPlace === 'Settings';

  return (
    <View
      style={[
        widthStyles(0).w_p_70,
        layoutStyles.flex_row,
        layoutStyles.align_center,
        marginStyles.mt_20,
        marginStyles.m_hor_auto,
      ]}>
      <TextInput
        value={player}
        onChangeText={setPlayer}
        style={[
          heightStyles(35).h_custom,
          widthStyles(0).w_p_80,
          isSettings ? colorStyles.bg_quinary : colorStyles.bg_senary,
          globalStyles.border_radius_4,
          globalStyles.boxShadow,
          paddingStyles.p_hor_5,
          textStyles.text_font_secondary,
          colorStyles.color_tertiary,
        ]}
        placeholderTextColor={
          isSettings ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
        }
        placeholder="Skriv inn et navn..."
      />
      <AddPlayerButton
        player={player}
        setPlayer={setPlayer}
        inputPlace={inputPlace}
      />
    </View>
  );
};

export default PlayerInput;
