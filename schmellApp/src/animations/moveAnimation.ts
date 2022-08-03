import {Animated, Easing} from 'react-native';

export default (animation: Animated.Value) => {
  Animated.timing(animation, {
    duration: 400,
    toValue: 3,
    easing: Easing.bounce,
    useNativeDriver: false,
  }).start();
};
