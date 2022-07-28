import React, {FC} from 'react';
import {View} from 'react-native';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import {questionType} from '../../typings/questionTypes';
import {PlusIconButton} from '../Buttons/IconButtons';
import Punishment from './Punishment';

interface GameFooterProps {
  handleShow: () => void;
  currentQuestion: questionType;
}

const GameFooter: FC<GameFooterProps> = ({handleShow, currentQuestion}) => {
  return (
    <View
      style={[
        layoutStyles.flex_row,
        layoutStyles.align_end,
        marginStyles.mt_10,
        layoutStyles.justify_space,
      ]}>
      <Punishment punishment={currentQuestion?.punishment} />
      <PlusIconButton onPress={handleShow} />
    </View>
  );
};

export default GameFooter;
