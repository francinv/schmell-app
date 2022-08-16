import React, {FC, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import rotatingAnimation from '../../animations/moveAnimations/rotatingAnimation';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import SchmellButton from '../Buttons/SchmellButton';
import SimpleText from './SimpleText';
import gameFunctionStyles from './style';

interface CardShowProps {
  questionDesc: string;
  answer: string;
}

const CardShow: FC<CardShowProps> = ({questionDesc, answer}) => {
  const lang = useSelector(selectLanguage);

  const showString = useLocale(lang, 'SHOW_ANSWER') as string;
  const hideString = useLocale(lang, 'HIDE_ANSWER') as string;

  const [show, setShow] = useState(false);

  const [rotateAnimation] = useState(new Animated.Value(0));

  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '360deg'],
  });

  const handlePress = () => {
    rotateAnimation.setValue(0);
    rotatingAnimation(rotateAnimation);
    setShow(wasShown => !wasShown);
  };

  useEffect(() => {
    if (show) {
      setShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const boxAnimationStyle = {
    transform: [
      {
        rotateY: rotateInterpolation,
      },
    ],
  };

  return (
    <Animated.View
      style={[boxAnimationStyle, gameFunctionStyles.cardShowContainer]}>
      <SimpleText text={show ? answer : questionDesc} />
      <SchmellButton
        handlePress={handlePress}
        content={show ? hideString : showString}
        type="L"
        wantShadow={true}
        additionalStyling={gameFunctionStyles.customButtonStyling}
      />
    </Animated.View>
  );
};

export default CardShow;
