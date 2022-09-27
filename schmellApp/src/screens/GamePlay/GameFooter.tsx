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
  setCountDownDone: (isDone: boolean) => void;
  isCountDownDone: boolean;
}

const GameFooter: FC<GameFooterProps> = ({
  handleShow,
  setCountDownDone,
  isCountDownDone,
}) => {
  const currentQuestion = useSelector(selectCurrentQuestion);

  const countDownSeconds = parseFunctionTimer(currentQuestion?.function);

  const shouldShowCountDown = () => {
    if (countDownSeconds === undefined) {
      return false;
    }
    if (
      currentQuestion?.type === 'Skal vi vedde' ||
      'Challenge accepted?' ||
      'Instant Spoilers'
    ) {
      return true;
    }
    return false;
  };

  return (
    <View style={gamePlayStyles.footerContainer}>
      <Punishment currentQuestion={currentQuestion} />
      {shouldShowCountDown() && (
        <CountDown
          countDownSeconds={countDownSeconds}
          setCountDownDone={setCountDownDone}
          isCountDownDone={isCountDownDone}
        />
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
