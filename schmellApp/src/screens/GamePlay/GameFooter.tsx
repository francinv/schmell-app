import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {GamePlusIcon} from '../../assets/icons/PlusIcon';
import IconButton from '../../components/Buttons/IconButton';
import CountDown from '../../components/GameFunctions/Countdown';
import {selectCurrentQuestion} from '../../features/selectors';
import {parseFunctionTimer} from '../../utils/parsers';
import Punishment from './Punishment';
import gamePlayStyles from './style';

interface GameFooterProps {
  handleShow: () => void;
}

const GameFooter: FC<GameFooterProps> = ({handleShow}) => {
  const currentQuestion = useSelector(selectCurrentQuestion);

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
