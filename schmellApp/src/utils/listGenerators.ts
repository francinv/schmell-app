import {Animated} from 'react-native';

export const getInitialList = (
  length: number,
  initialValue: 0 | 1,
): Animated.Value[] => {
  let arrayOfValues: Animated.Value[] = [];
  for (let i = 0; i < length; i++) {
    arrayOfValues.push(new Animated.Value(initialValue));
  }
  return arrayOfValues;
};
