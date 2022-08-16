import {Animated, Easing} from 'react-native';

export default (moveValue: Animated.Value) => {
  Animated.timing(moveValue, {
    toValue: 0,
    delay: 50,
    duration: 350,
    easing: Easing.bounce,
    useNativeDriver: false,
  }).start();
};
