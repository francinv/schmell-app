import React, {FC, useState} from 'react';
import {Animated, Pressable, ViewStyle} from 'react-native';
import rotatingAnimation from '../../animations/moveAnimations/rotatingAnimation';
import CardBackground from '../../assets/cards/CardBackground';
import cards from '../../constants/cards';
import gameFunctionStyles from './style';
import {useSelector} from 'react-redux';
import {
  selectDeckCardRandomNumber,
  selectIsDeckCardDisabled,
  selectIsDeckCardShown,
} from '../../features/selectors';
import actionDispatch from '../../features/dispatch';
import {useAppDispatch} from '../../features/hooks';
import {getRandomInt} from '../../utils/number';

const DeckDraw: FC = () => {
  const [rotateAnimation] = useState(new Animated.Value(0));

  const randomNumber = useSelector(selectDeckCardRandomNumber);
  const showCard = useSelector(selectIsDeckCardShown);
  const isDisabled = useSelector(selectIsDeckCardDisabled);

  const {setRandom, setDisabled, setIsShown} = actionDispatch(useAppDispatch());
  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '360deg'],
  });

  const handlePress = () => {
    if (!isDisabled) {
      setRandom(getRandomInt(0, cards.length - 1));
      rotateAnimation.setValue(0);
      rotatingAnimation(rotateAnimation);
      setIsShown(true);
      setDisabled(true);
    }
  };

  const boxAnimationStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      {
        rotateY: rotateInterpolation,
      },
    ],
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        gameFunctionStyles.customButtonStyling,
        gameFunctionStyles.cardDeckBtnStyling,
      ]}>
      <Animated.View
        style={[boxAnimationStyle, {maxWidth: 240 / 2, maxHeight: 336 / 2}]}>
        {showCard && randomNumber ? cards[randomNumber] : <CardBackground />}
      </Animated.View>
    </Pressable>
  );
};

export default DeckDraw;
