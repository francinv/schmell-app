import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage, selectVoice} from '../../../features/selectors';
import useLocale from '../../../hooks/useLocale';
import colorStyles from '../../../styles/color.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import widthStyles from '../../../styles/width.styles';
import {FemaleEmojiButton, MaleEmojiButton} from '../../Buttons/EmojiButtons';
import InputContainer from './InputContainer';
import SubTitle from './SubTitle';

const Voice: React.FC = () => {
  const voice = useSelector(selectVoice);
  const language = useSelector(selectLanguage);

  return (
    <InputContainer>
      <SubTitle title={useLocale(language, 'SETTINGS_VOICE') as string} />
      <View
        style={[
          layoutStyles.flex_row,
          layoutStyles.align_center,
          layoutStyles.justify_center,
          marginStyles.mt_15,
        ]}>
        <FemaleEmojiButton selected={voice === 'F' ? true : false} />
        <View
          style={[
            colorStyles.border_primary,
            widthStyles(0).border_width_1,
            heightStyles(0).h_p_100,
            marginStyles.m_hor_22,
          ]}
        />
        <MaleEmojiButton selected={voice === 'M' ? true : false} />
      </View>
    </InputContainer>
  );
};

export default Voice;
