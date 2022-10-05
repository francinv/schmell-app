import React, {FC, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import QuizCard from './QuizCard';
import gameFunctionStyles from './style';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import SimpleText from './SimpleText';
import shakeAnimation from '../../animations/moveAnimations/shakeAnimation';

interface QuizCardContainerProps {
  options: string[];
  correctAnswer: string;
  questionDesc: string;
}

const QuizCardContainer: FC<QuizCardContainerProps> = props => {
  const {correctAnswer, options, questionDesc} = props;

  const [statusText, setStatusText] = useState('');
  const [textShadowColor, setTextShadowColor] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [bounceAnimation] = useState(new Animated.Value(0));
  const [showButtonShadow, setShowButtonShadow] = useState(false);

  const shakeInterpolated = bounceAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  const lottieRef = useRef<Lottie>(null);

  const lang = useSelector(selectLanguage);
  const correct = useLocale(lang, 'CORRECT');
  const wrong = useLocale(lang, 'WRONG');

  const handlePress = (isCorrectOption: boolean) => {
    if (isCorrectOption) {
      lottieRef.current?.play();
      setStatusText(correct as string);
      setTextShadowColor('green');
    } else {
      setStatusText(wrong as string);
      setTextShadowColor('red');
    }
    setShowButtonShadow(true);
    shakeAnimation(bounceAnimation);
    setDisabled(true);
  };

  const textStyling = {
    transform: [
      {
        translateX: shakeInterpolated,
      },
    ],
    textShadowColor,
  };

  return (
    <>
      <SimpleText
        text={questionDesc}
        style={gameFunctionStyles.largerSimpleText}
      />
      <View style={gameFunctionStyles.quizContainer}>
        {options.map((option, index) => (
          <QuizCard
            key={index}
            value={option}
            isCorrectOption={option === correctAnswer}
            onPress={handlePress}
            lottieRef={lottieRef}
            showShadow={showButtonShadow}
            disabled={disabled}
          />
        ))}
      </View>
      <Animated.Text style={[gameFunctionStyles.quizStatusText, textStyling]}>
        {statusText}
      </Animated.Text>
    </>
  );
};

export default QuizCardContainer;
