import React, {FC, RefObject} from 'react';
import {Pressable} from 'react-native';
import SimpleText from './SimpleText';
import gameFunctionStyles from './style';
import Lottie from 'lottie-react-native';
import lottieAnimation from '../../assets/animations/confetti.json';

interface QuizCardProps {
  value: string;
  isCorrectOption: boolean;
  onPress: (isCorrectOption: boolean) => void;
  lottieRef: RefObject<Lottie>;
  showShadow: boolean;
  disabled?: boolean;
}

const QuizCard: FC<QuizCardProps> = ({
  value,
  isCorrectOption,
  onPress,
  lottieRef,
  disabled,
  showShadow,
}) => {
  const getShadowColor = () =>
    showShadow ? (isCorrectOption ? 'green' : 'red') : '#000';

  return (
    <Pressable
      onPress={() => onPress(isCorrectOption)}
      style={[gameFunctionStyles.quizCard, {shadowColor: getShadowColor()}]}
      disabled={disabled}>
      <SimpleText text={value} />
      <Lottie source={lottieAnimation} ref={lottieRef} />
    </Pressable>
  );
};

export default QuizCard;
