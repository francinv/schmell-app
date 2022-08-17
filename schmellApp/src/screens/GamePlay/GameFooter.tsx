import React, {FC} from 'react';
import {View} from 'react-native';
import {GamePlusIcon} from '../../assets/icons/PlusIcon';
import IconButton from '../../components/Buttons/IconButton';
import CountDown from '../../components/GameFunctions/Countdown';
import {carouselType} from '../../typings/common';
import {parseFunctionTimer} from '../../utils/parsers';
import Punishment from './Punishment';
import gamePlayStyles from './style';

interface GameFooterProps {
  handleShow: () => void;
  carouselState: carouselType;
}

const GameFooter: FC<GameFooterProps> = ({carouselState, handleShow}) => {
  const currentQuestion =
    carouselState.questionList[carouselState.currentQuestionIndex];

  const countDownSeconds = parseFunctionTimer(currentQuestion?.function);

  const shouldShowCountDown = () => {
    if (!(currentQuestion?.type === 'Skal vi vedde' || 'Challenge accepted?')) {
      return false;
    }
    if (countDownSeconds === undefined) {
      return false;
    }
    return true;
  };

  return (
    <View style={gamePlayStyles.footerContainer}>
      <Punishment currentQuestion={currentQuestion} />
      {shouldShowCountDown() && (
        <CountDown countDownSeconds={countDownSeconds} />
      )}
      <IconButton
        handlePress={handleShow}
        additionalStyling={{marginLeft: 'auto'}}>
        <GamePlusIcon />
      </IconButton>
    </View>
  );
};

export default GameFooter;
