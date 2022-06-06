import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {GameSettingsScreenNavigationProp} from '../../typings/navigationTypes';

const StartButton: FC = () => {
  let buttonTexts = ['3', '2', '1', 'Go!'];
  const [buttonText, setButtonText] = useState('Start');
  const [animation] = useState(new Animated.Value(1));
  const navigation = useNavigation<GameSettingsScreenNavigationProp>();
  const handlePress = () => {
    for (let i = 0; i < buttonTexts.length; i++) {
      setTimeout(() => handleAnimation(buttonTexts[i]), 1000 * i);
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

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        widthStyles(0).w_p_90,
        marginStyles.mt_20,
        marginStyles.m_hor_auto,
        heightStyles(70).h_custom,
        globalStyles.border_radius_10,
        colorStyles.bg_primary,
        globalStyles.boxShadow,
        layoutStyles.flex_center,
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
    </TouchableOpacity>
  );
};

export default StartButton;
