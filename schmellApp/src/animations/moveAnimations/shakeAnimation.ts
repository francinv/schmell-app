import {Animated, Easing} from 'react-native';

export default (
  animation: Animated.Value,
  setCountDownDone?: (done: boolean) => void,
) => {
  Animated.timing(animation, {
    duration: 400,
    toValue: 3,
    easing: Easing.bounce,
    useNativeDriver: false,
  }).start(() => {
    setTimeout(() => {
      setCountDownDone && setCountDownDone(true);
    }, 700);
  });
};
