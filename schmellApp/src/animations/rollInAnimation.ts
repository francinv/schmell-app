import {Dispatch, SetStateAction} from 'react';
import {Animated, Easing} from 'react-native';

export default (
  opacityAnim: Animated.Value,
  setShow: Dispatch<SetStateAction<boolean>>,
  shadowAnim: Animated.Value,
  borderAnim: Animated.Value,
) => {
  setShow(true);
  Animated.timing(opacityAnim, {
    toValue: 1,
    duration: 500,
    easing: Easing.ease,
    useNativeDriver: false,
  }).start();
  Animated.timing(shadowAnim, {
    toValue: 1,
    duration: 500,
    easing: Easing.circle,
    useNativeDriver: false,
  }).start();
  Animated.timing(borderAnim, {
    toValue: 1,
    duration: 500,
    easing: Easing.ease,
    useNativeDriver: false,
  }).start();
};
