import React, {FC, useEffect, useState} from 'react';
import {Animated, View} from 'react-native';
import moveAnimation from '../../animations/moveAnimation';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {PlayPauseButton} from '../Buttons/IconButtons';
import SimpleText from './SimpleText';

interface CountDownProps {
  countDownSeconds: number;
  questionDesc: string;
}
const CountDown: FC<CountDownProps> = ({countDownSeconds, questionDesc}) => {
  const [counter, setCounter] = useState(countDownSeconds);
  const [started, setStarted] = useState(false);
  const [bounceAnimation] = useState(new Animated.Value(0));
  const mustAddLeadingZero = counter < 10;
  const finished = counter === 0;

  const getContent = () => {
    if (finished) {
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

  const handleStart = () => setStarted(wasStarted => !wasStarted);

  useEffect(() => {
    if (started) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (finished) {
      setStarted(false);
      moveAnimation(bounceAnimation);
    }
  }, [counter, started, finished, bounceAnimation]);

  const shakeInterpolated = bounceAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  const textStyle = {
    transform: [
      {
        translateX: shakeInterpolated,
      },
    ],
  };

  const Timer = () => (
    <Animated.Text
      style={[
        textStyles.text_25,
        textStyles.text_center,
        textStyles.text_font_primary,
        paddingStyles.p_3,
        textStyles.text_shadow,
        colorStyles.color_tertiary,
        textStyle,
        globalStyles.z_100,
      ]}>
      {getContent()}
    </Animated.Text>
  );
  return (
    <>
      <SimpleText text={questionDesc} />
      <View
        style={[
          layoutStyles.flex_center,
          marginStyles.mt_10,
          paddingStyles.p_ver_10,
          paddingStyles.p_hor_75,
          globalStyles.border_radius_10,
          widthStyles(120).w_custom,
          colorStyles.bg_tertiary,
        ]}>
        <Timer />
        <PlayPauseButton
          onPress={handleStart}
          started={started}
          finished={finished}
        />
      </View>
    </>
  );
};

export default CountDown;
