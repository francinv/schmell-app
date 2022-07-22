import {Animated} from 'react-native';

export default (moveValue: Animated.Value) => {
  Animated.timing(moveValue, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
  }).start();
};
