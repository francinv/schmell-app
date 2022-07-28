import React, {FC, useState} from 'react';
import {Animated} from 'react-native';
import {rotate} from '../../animations/rotateAnimation';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
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
        widthStyles(0).w_p_100,
        globalStyles.border_radius_10,
        globalStyles.boxShadow,
        paddingStyles.p_ver_10,
        paddingStyles.p_hor_5,
        colorStyles.bg_senary,
        boxStyle,
      ]}>
      <SimpleText text={show ? answer : questionDesc} />
      <CallToAction
        content={show ? 'Skjul svar' : 'Vis svar'}
        customStyle={undefined}
        handleClick={handlePress}
      />
    </Animated.View>
  );
};

export default GTGShow;
