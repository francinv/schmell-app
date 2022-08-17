import {Animated} from 'react-native';

const loadingAnimation = (opacityAnimation: Animated.Value) => {
  Animated.timing(opacityAnimation, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: false,
  }).start(() => {
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => loadingAnimation(opacityAnimation));
  });
};

export default loadingAnimation;
