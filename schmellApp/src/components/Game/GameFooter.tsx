import React, {FC} from 'react';
import {View} from 'react-native';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import {questionType} from '../../typings/questionTypes';
import {parseFunctionTimer} from '../../utils/parsers';
import {PlusIconButton} from '../Buttons/IconButtons';
import CountDown from '../QuestionsContent/Countdown';
import Punishment from './Punishment';

interface GameFooterProps {
  handleShow: () => void;
  currentQuestion: questionType;
}

const GameFooter: FC<GameFooterProps> = ({handleShow, currentQuestion}) => {
  const countDownSeconds = parseFunctionTimer(currentQuestion?.function);

  const showCountDown = () => {
    if (currentQuestion?.type === 'Skal vi vedde?' || 'Challenge accepted?') {
      if (countDownSeconds !== undefined) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <View
      style={[
        layoutStyles.flex_row,
        layoutStyles.align_end,
        marginStyles.mt_10,
      ]}>
      <Punishment currentQuestion={currentQuestion} />
      {showCountDown() ? (
        <CountDown countDownSeconds={countDownSeconds} />
      ) : null}
      <PlusIconButton onPress={handleShow} />
    </View>
  );
};

export default GameFooter;
