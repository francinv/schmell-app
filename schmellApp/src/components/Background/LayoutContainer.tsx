import React, {FC} from 'react';
import {Animated} from 'react-native';
import colorStyles from '../../styles/color.styles';
import layoutStyles from '../../styles/layout.styles';

const LayoutContainer: FC = ({children}) => {
  return (
    <Animated.View style={[layoutStyles.flex_1, colorStyles.bg_septenary]}>
      {children}
    </Animated.View>
  );
};

export default LayoutContainer;
