import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../features/selectors';
import globalStyles from '../../../styles/global.styles';
import FlagButton from '../../Buttons/FlagButtons';
import InputContainer from './InputContainer';
import styles from './styles';
import SubTitle from './SubTitle';

const Language: React.FC = () => {
  const language = useSelector(selectLanguage);

  return (
    <InputContainer>
      <SubTitle title="Språk" />
      <View
        style={[
          globalStyles.flex_row,
          globalStyles.align_center,
          globalStyles.justify_center,
          globalStyles.mt_15,
        ]}>
        <FlagButton
          locale="nb-NO"
          selected={language === 'nb-NO' ? true : false}
        />
        <View style={styles.divider} />
        <FlagButton
          locale="en-GB"
          selected={language === 'en-GB' ? true : false}
        />
        <View style={styles.divider} />
        <FlagButton
          locale="sv-SE"
          selected={language === 'sv-SE' ? true : false}
        />
        <View style={styles.divider} />
        <FlagButton
          locale="da-DA"
          selected={language === 'da-DA' ? true : false}
        />
      </View>
    </InputContainer>
  );
};

export default Language;
