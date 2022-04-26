import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import globalStyles from '../../styles/global.styles';

const LayoutContainer: React.FC = ({children}) => {
  const [animation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 3500,
        useNativeDriver: false,
      }).start(() => handleAnimation());
    });
  };

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(0, 226, 191)', 'rgb(110, 82, 143)'],
  });

  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };

  useEffect(() => {
    handleAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[globalStyles.flex_1, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default LayoutContainer;
