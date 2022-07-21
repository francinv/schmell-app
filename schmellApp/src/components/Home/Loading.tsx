import React, {useEffect, useState} from 'react';
import {Animated, Text} from 'react-native';
import BombIcon from '../../assets/icons/BombIcon';
import colorStyles from '../../styles/color.styles';
import marginStyles from '../../styles/margin.styles';
import textStyles from '../../styles/text.styles';
import {HomeWrapper} from './HomeComponent';

const Loading = () => {
  const [opacityAnim] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start(() => handleAnimation());
    });
  };

  useEffect(() => {
    handleAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeWrapper>
      <Animated.View style={[{opacity: opacityAnim}, marginStyles.mt_10]}>
        <BombIcon />
      </Animated.View>
      <Text
        style={[
          textStyles.text_40,
          textStyles.text_font_primary,
          textStyles.text_center,
          colorStyles.color_primary,
          marginStyles.mt_10,
        ]}>
        Vi henter spillene nå...
      </Text>
    </HomeWrapper>
  );
};

export default Loading;
