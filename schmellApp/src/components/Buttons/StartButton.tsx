import React, {
  FC,
  useState,
  Dispatch as ReactDispatch,
  SetStateAction,
} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dispatch} from '@reduxjs/toolkit';
import {Animated, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import moveAnimation from '../../animations/moveAnimation';
import {fetchQuestions} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectPlayers, selectWeeks} from '../../features/selectors';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {GameSettingsScreenNavigationProp} from '../../typings/navigationTypes';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setQuestions: (query: number) => dispatch(fetchQuestions(query)),
});

interface ButtonProps {
  buttonText: string;
  setButtonText: ReactDispatch<SetStateAction<string>>;
  shakeAnimation: Animated.Value;
  interpolatedShake: Animated.AnimatedInterpolation;
}
const StartButton: FC<ButtonProps> = props => {
  const {buttonText, setButtonText, shakeAnimation, interpolatedShake} = props;
  const {setQuestions} = actionDispatch(useAppDispatch());
  const week = useSelector(selectWeeks);
  const players = useSelector(selectPlayers);

  let buttonTexts = ['3', '2', '1', 'Go!'];
  const [animation] = useState(new Animated.Value(1));

  const navigation = useNavigation<GameSettingsScreenNavigationProp>();

  const handlePress = () => {
    if (players.length === 0) {
      shakeAnimation.setValue(0);
      setButtonText('Mangler spillere!');
      moveAnimation(shakeAnimation);
    } else {
      for (let i = 0; i < buttonTexts.length; i++) {
        setTimeout(() => handleAnimation(buttonTexts[i]), 1000 * i);
      }
      setQuestions(week.id);
    }
  };

  function handleAnimation(newText: string) {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setButtonText(newText);
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
    if (newText === 'Go!') {
      setTimeout(() => {
        navigation.navigate('Game');
      }, 1000);
    }
  }

  const boxStyle = {
    transform: [
      {
        translateX: interpolatedShake,
      },
    ],
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View
        style={[
          widthStyles(0).w_p_90,
          marginStyles.mt_20,
          marginStyles.m_hor_auto,
          heightStyles(70).h_custom,
          globalStyles.border_radius_10,
          colorStyles.bg_primary,
          globalStyles.boxShadow,
          layoutStyles.flex_center,
          boxStyle,
        ]}>
        <Animated.Text
          style={[
            textStyles.text_font_primary,
            textStyles.text_center,
            textStyles.text_35,
            paddingStyles.p_5,
            {opacity: animation},
          ]}>
          {buttonText}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default StartButton;
