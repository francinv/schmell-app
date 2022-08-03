import React, {FC} from 'react';
import {View} from 'react-native';
import {lockPortrait} from '../../native/RNLockOrientation';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import {LightBulbButton, XHeaderButton} from '../Buttons/IconButtons';

interface GameHeaderProps {
  navigation: any;
  handleShow: () => void;
}
const GameHeader: FC<GameHeaderProps> = props => {
  const {navigation, handleShow} = props;

  return (
    <View
      style={[
        layoutStyles.flex_row,
        layoutStyles.align_center,
        layoutStyles.justify_space,
        marginStyles.mt_10,
      ]}>
      <LightBulbButton onPress={handleShow} />
      <XHeaderButton
        onPress={() => {
          navigation.goBack();
          lockPortrait();
        }}
      />
    </View>
  );
};

export default GameHeader;
