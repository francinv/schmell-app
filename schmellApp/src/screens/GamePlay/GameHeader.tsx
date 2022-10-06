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
import {parseFunctionTimer} from '../../utils/parsers';
import {useSelector} from 'react-redux';
import {selectCurrentQuestion} from '../../features/selectors';
import CountDown from '../../components/GameFunctions/Countdown';

interface GameHeaderProps {
  handleShow: () => void;
  setCountDownDone: (isDone: boolean) => void;
  isCountDownDone: boolean;
}

const GameHeader: FC<GameHeaderProps> = props => {
  const {handleShow, isCountDownDone, setCountDownDone} = props;

  const currentQuestion = useSelector(selectCurrentQuestion);

  const navigation = useNavigation<GameScreenNavigationProp>();

  const {setInnerIndex, setCurrentIndex} = actionDispatch(useAppDispatch());

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
    <View style={gamePlayStyles.headerContainer}>
      <IconButton handlePress={handleShow}>
        <LightBulbIcon />
      </IconButton>
      {shouldShowCountDown() && (
        <CountDown
          countDownSeconds={countDownSeconds}
          setCountDownDone={setCountDownDone}
          isCountDownDone={isCountDownDone}
        />
      )}
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
