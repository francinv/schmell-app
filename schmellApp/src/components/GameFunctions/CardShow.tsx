import React, {FC, useEffect, useState} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import rotatingAnimation from '../../animations/moveAnimations/rotatingAnimation';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import SchmellButton from '../Buttons/SchmellButton';
import SimpleText from './SimpleText';
import gameFunctionStyles from './style';

interface CardShowProps {
  questionDesc?: string;
  answer: string;
  numberOfCards: number;
}

const CardShow: FC<CardShowProps> = ({questionDesc, answer, numberOfCards}) => {
  const lang = useSelector(selectLanguage);

  const showString = useLocale(lang, 'SHOW_ANSWER') as string;
  const hideString = useLocale(lang, 'HIDE_ANSWER') as string;
  const showQuestionString = useLocale(lang, 'SHOW') as string;
  const hideQuestionString = useLocale(lang, 'HIDE') as string;

  const [show, setShow] = useState(false);

  const [rotateAnimation] = useState(new Animated.Value(0));

  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '360deg'],
  });

  const isSeveralCards = numberOfCards > 1;

  const buttonShowString = isSeveralCards ? showQuestionString : showString;
  const buttonHideString = isSeveralCards ? hideQuestionString : hideString;

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

  const boxAnimationStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      {
        rotateY: rotateInterpolation,
      },
    ],
    maxWidth: isSeveralCards ? '30%' : '80%',
    minWidth: isSeveralCards ? '30%' : '80%',
  };

  const buttonStyle: StyleProp<ViewStyle> = {
    minWidth: isSeveralCards ? '50%' : '80%',
  };

  return (
    <Animated.View
      style={[boxAnimationStyle, gameFunctionStyles.cardShowContainer]}>
      <SimpleText
        text={show ? answer : questionDesc || ''}
        style={isSeveralCards && gameFunctionStyles.smallerSimpleText}
      />
      <SchmellButton
        handlePress={handlePress}
        content={show ? buttonShowString : buttonHideString}
        type={isSeveralCards ? 'S' : 'L'}
        wantShadow={true}
        additionalStyling={[
          gameFunctionStyles.customButtonStyling,
          buttonStyle,
        ]}
      />
    </Animated.View>
  );
};

export default CardShow;
