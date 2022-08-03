import {Animated, Easing} from 'react-native';

export default (scaleValue: Animated.Value) => {
  Animated.timing(scaleValue, {
    toValue: 1,
    duration: 500,
    useNativeDriver: false,
    easing: Easing.bounce,
  }).start();
};
