import React, {FC} from 'react';
import {View} from 'react-native';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import {PlusIconButton} from '../Buttons/IconButtons';

interface GameFooterProps {
  handleShow: () => void;
}

const GameFooter: FC<GameFooterProps> = ({handleShow}) => {
  return (
    <View
      style={[
        layoutStyles.flex_row,
        layoutStyles.align_center,
        marginStyles.mt_10,
        layoutStyles.justify_end,
      ]}>
      <PlusIconButton onPress={handleShow} />
    </View>
  );
};

export default GameFooter;
