import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';

export default (
  heightAnim: Animated.Value,
  setShow: Dispatch<SetStateAction<boolean>>,
  shadowAnim: Animated.Value,
  borderAnim: Animated.Value,
) => {
  Animated.timing(heightAnim, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
  }).start();
  Animated.timing(shadowAnim, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
  }).start();
  Animated.timing(borderAnim, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
  }).start();
  setTimeout(() => {
    setShow(false);
  }, 500);
};
