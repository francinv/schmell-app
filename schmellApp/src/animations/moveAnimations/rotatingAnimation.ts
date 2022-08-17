import {Animated, Easing} from 'react-native';

export default (animation: Animated.Value) => {
  Animated.timing(animation, {
    duration: 500,
    toValue: 180,
    useNativeDriver: true,
    easing: Easing.linear,
  }).start();
};
