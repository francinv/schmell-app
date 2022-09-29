import React, {FC} from 'react';
import {Pressable} from 'react-native';
import SimpleText from './SimpleText';
import gameFunctionStyles from './style';
import Lottie from 'lottie-react-native';

interface QuizCardProps {
  value: string;
  isCorrectOption: boolean;
  onPress: (isCorrectOption: boolean) => void;
  lottieRef: React.RefObject<Lottie>;
  disabled?: boolean;
}

const QuizCard: FC<QuizCardProps> = ({
  value,
  isCorrectOption,
  onPress,
  lottieRef,
  disabled,
}) => (
  <Pressable
    onPress={() => onPress(isCorrectOption)}
    style={gameFunctionStyles.quizCard}
    disabled={disabled}>
    <SimpleText text={value} />
    <Lottie
      source={require('../../assets/animations/confetti.json')}
      ref={lottieRef}
    />
  </Pressable>
);

export default QuizCard;
