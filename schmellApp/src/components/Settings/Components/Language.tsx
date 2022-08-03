import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../features/selectors';
import useLocale from '../../../hooks/useLocale';
import colorStyles from '../../../styles/color.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import widthStyles from '../../../styles/width.styles';
import FlagButton from '../../Buttons/FlagButtons';
import InputContainer from './InputContainer';
import SubTitle from './SubTitle';

const Language: React.FC = () => {
  const language = useSelector(selectLanguage);

  return (
    <InputContainer>
      <SubTitle title={useLocale(language, 'SETTINGS_LANGUAGE') as string} />
      <View
        style={[
          layoutStyles.flex_row,
          layoutStyles.align_center,
          layoutStyles.justify_center,
          marginStyles.mt_15,
        ]}>
        <FlagButton
          locale="nb-NO"
          selected={language === 'nb-NO' ? true : false}
        />
        <View
          style={[
            colorStyles.border_primary,
            widthStyles(0).border_width_1,
            heightStyles(0).h_p_100,
            marginStyles.m_hor_22,
          ]}
        />
        <FlagButton
          locale="en-GB"
          selected={language === 'en-GB' ? true : false}
        />
        <View
          style={[
            colorStyles.border_primary,
            widthStyles(0).border_width_1,
            heightStyles(0).h_p_100,
            marginStyles.m_hor_22,
          ]}
        />
        <FlagButton
          locale="sv-SE"
          selected={language === 'sv-SE' ? true : false}
        />
        <View
          style={[
            colorStyles.border_primary,
            widthStyles(0).border_width_1,
            heightStyles(0).h_p_100,
            marginStyles.m_hor_22,
          ]}
        />
        <FlagButton
          locale="da-DA"
          selected={language === 'da-DA' ? true : false}
        />
      </View>
    </InputContainer>
  );
};

export default Language;
