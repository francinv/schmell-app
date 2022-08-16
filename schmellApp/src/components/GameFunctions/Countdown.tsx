import React, {FC, useEffect, useState} from 'react';
import {Animated, View} from 'react-native';
import shakeAnimation from '../../animations/moveAnimations/shakeAnimation';
import PauseIcon from '../../assets/icons/PauseIcon';
import PlayIcon from '../../assets/icons/PlayIcon';
import IconButton from '../Buttons/IconButton';
import gameFunctionStyles from './style';

interface CountDownProps {
  countDownSeconds: number;
}

const CountDown: FC<CountDownProps> = ({countDownSeconds}) => {
  const [counter, setCounter] = useState(countDownSeconds);
  const [started, setStarted] = useState(false);

  const [bounceAnimation] = useState(new Animated.Value(0));

  const mustAddLeadingZero = counter < 10;
  const isFinished = counter === 0;

  const shakeInterpolated = bounceAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  const animationTextStyle = {
    transform: [
      {
        translateX: shakeInterpolated,
      },
    ],
  };

  const handleStart = () => setStarted(wasStarted => !wasStarted);

  const getContent = () => {
    if (isFinished) {
      return 'Ferdig!';
    } else {
      const preString = '00:';
      if (mustAddLeadingZero) {
        return `${preString}0${counter}`;
      } else {
        return `${preString}${counter}`;
      }
    }
  };

  useEffect(() => {
    if (started) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (isFinished) {
      setStarted(false);
      shakeAnimation(bounceAnimation);
    }
  }, [counter, started, isFinished, bounceAnimation]);

  const Timer = (
    <Animated.Text
      style={[animationTextStyle, gameFunctionStyles.countDownText]}>
      {getContent()}
    </Animated.Text>
  );

  return (
    <View style={gameFunctionStyles.countDownContainer}>
      {Timer}
      <IconButton
        handlePress={handleStart}
        additionalStyling={gameFunctionStyles.countDownButton}>
        {started ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
    </View>
  );
};

export default CountDown;
