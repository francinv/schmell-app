import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import LightBulbIcon from '../../assets/icons/LightBulbIcon';
import {XIconHeader} from '../../assets/icons/XIcon';
import IconButton from '../../components/Buttons/IconButton';
import {GameScreenNavigationProp} from '../../typings/navigationTypes';
import gamePlayStyles from './style';
import {lockPortrait} from '../../utils/orientationLocker';

interface GameHeaderProps {
  handleShow: () => void;
}

const GameHeader: FC<GameHeaderProps> = ({handleShow}) => {
  const navigation = useNavigation<GameScreenNavigationProp>();

  return (
    <View style={gamePlayStyles.headerContainer}>
      <IconButton handlePress={handleShow}>
        <LightBulbIcon />
      </IconButton>
      <IconButton
        handlePress={() => {
          navigation.goBack();
          lockPortrait();
        }}>
        <XIconHeader />
      </IconButton>
    </View>
  );
};

export default GameHeader;
