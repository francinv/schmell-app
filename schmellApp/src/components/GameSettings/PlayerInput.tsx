import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../locale/useLocale';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import AddPlayerButton from '../Buttons/AddPlayerButton';

interface InputProps {
  inputPlace: 'Settings' | 'InGame';
  buttonText: string;
  setButtonText: Dispatch<SetStateAction<string>>;
}

const PlayerInput: FC<InputProps> = props => {
  const {inputPlace, buttonText, setButtonText} = props;
  const [player, setPlayer] = useState('');
  const lang = useSelector(selectLanguage);

  const isSettings = inputPlace === 'Settings';

  const handleChange = () => {
    if (inputPlace === 'Settings') {
      if (buttonText !== 'Start') {
        setButtonText('Start');
      }
    }
  };

  return (
    <View
      style={[
        isSettings ? widthStyles(0).w_p_90 : widthStyles(0).w_p_70,
        layoutStyles.flex_row,
        layoutStyles.align_center,
        marginStyles.mt_20,
        marginStyles.m_hor_auto,
      ]}>
      <TextInput
        value={player}
        onChange={handleChange}
        onChangeText={setPlayer}
        style={[
          heightStyles(45).h_custom,
          widthStyles(0).w_p_80,
          colorStyles.bg_senary,
          globalStyles.border_radius_4,
          globalStyles.boxShadow,
          paddingStyles.p_hor_5,
          textStyles.text_font_secondary,
          colorStyles.color_tertiary,
          textStyles.text_20,
        ]}
        placeholderTextColor={
          isSettings ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
        }
        placeholder={useLocale(lang, 'PLAYER_INPUT_PLACEHOLDER') as string}
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
