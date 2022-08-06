/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {rotate} from '../../animations/rotateAnimation';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import widthStyles from '../../styles/width.styles';
import CallToAction from '../Buttons/CallToAction';
import SimpleText from './SimpleText';

interface Props {
  questionDesc: string;
  answer: string;
}

const GTGShow: FC<Props> = ({questionDesc, answer}) => {
  const [show, setShow] = useState(false);
  const [rotateAnim] = useState(new Animated.Value(0));

  const rotateInterpolation = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '360deg'],
  });

  const handlePress = () => {
    rotateAnim.setValue(0);
    rotate(rotateAnim);
    setShow(wasShown => !wasShown);
  };

  useEffect(() => {
    if (show) {
      setShow(false);
    }
  }, []);

  const boxStyle = {
    transform: [
      {
        rotateY: rotateInterpolation,
      },
    ],
  };

  return (
    <Animated.View
      style={[
        layoutStyles.flex_center,
        globalStyles.border_radius_10,
        globalStyles.boxShadow,
        paddingStyles.p_ver_10,
        paddingStyles.p_hor_5,
        colorStyles.bg_senary,
        boxStyle,
        globalStyles.z_100,
        widthStyles(400).w_min_custom,
        heightStyles(155).h_min_custom,
        marginStyles.mt_10,
      ]}>
      <SimpleText text={show ? answer : questionDesc} />
      <CallToAction
        content={show ? 'Skjul svar' : 'Vis svar'}
        customStyle={[marginStyles.mb_10, widthStyles(150).w_custom]}
        handleClick={handlePress}
        customTextStyle={''}
      />
    </Animated.View>
  );
};

export default GTGShow;
