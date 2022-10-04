import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import LightBulbIcon from '../../assets/icons/LightBulbIcon';
import {XIconHeader} from '../../assets/icons/XIcon';
import IconButton from '../../components/Buttons/IconButton';
import {GameScreenNavigationProp} from '../../types/navigation';
import gamePlayStyles from './style';
import {lockPortrait} from '../../utils/orientation';
import {useAppDispatch} from '../../features/hooks';
import actionDispatch from '../../features/dispatch';

interface GameHeaderProps {
  handleShow: () => void;
}

const GameHeader: FC<GameHeaderProps> = ({handleShow}) => {
  const navigation = useNavigation<GameScreenNavigationProp>();
  const {setInnerIndex, setCurrentIndex} = actionDispatch(useAppDispatch());

  return (
    <View style={gamePlayStyles.headerContainer}>
      <IconButton handlePress={handleShow}>
        <LightBulbIcon />
      </IconButton>
      <IconButton
        handlePress={() => {
          navigation.goBack();
          lockPortrait();
          setInnerIndex(0);
          setCurrentIndex(0);
        }}>
        <XIconHeader />
      </IconButton>
    </View>
  );
};

export default GameHeader;
