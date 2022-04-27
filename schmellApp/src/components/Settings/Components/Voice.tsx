import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectVoice} from '../../../features/selectors';
import globalStyles from '../../../styles/global.styles';
import {FemaleEmojiButton, MaleEmojiButton} from '../../Buttons/EmojiButtons';
import InputContainer from './InputContainer';
import styles from './styles';
import SubTitle from './SubTitle';

const Voice: React.FC = () => {
  const voice = useSelector(selectVoice);
  return (
    <InputContainer>
      <SubTitle title="Stemme" />
      <View
        style={[
          globalStyles.flex_row,
          globalStyles.align_center,
          globalStyles.justify_center,
          globalStyles.mt_15,
        ]}>
        <FemaleEmojiButton selected={voice === 'F' ? true : false} />
        <View style={styles.divider} />
        <MaleEmojiButton selected={voice === 'M' ? true : false} />
      </View>
    </InputContainer>
  );
};

export default Voice;
