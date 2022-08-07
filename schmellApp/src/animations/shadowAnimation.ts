import {Animated, Easing} from 'react-native';

export const shadowOut = (shadowAnim: Animated.Value) => {
  Animated.timing(shadowAnim, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: false,
    easing: Easing.ease,
  }).start();
};

export const shadowIn = (shadowAnim: Animated.Value) => {
  Animated.timing(shadowAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
    easing: Easing.ease,
  }).start();
};
