import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectVolume} from '../../../features/selectors';
import globalStyles from '../../../styles/global.styles';
import {
  SoundHighIconButton,
  SoundLowIconButton,
} from '../../Buttons/IconButtons';
import InputContainer from './InputContainer';
import styles from './styles';
import SubTitle from './SubTitle';

const Volume: React.FC = () => {
  const volume = useSelector(selectVolume);

  return (
    <InputContainer>
      <SubTitle title="Lydnivå" />
      <View
        style={[
          globalStyles.flex_row,
          globalStyles.align_center,
          globalStyles.justify_center,
          globalStyles.mt_15,
        ]}>
        <SoundLowIconButton volume={volume} />
        <View style={styles.volumeTextContainer}>
          <Text style={styles.volumeText}>{volume}</Text>
        </View>
        <SoundHighIconButton volume={volume} />
      </View>
    </InputContainer>
  );
};

export default Volume;
