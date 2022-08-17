import React, {FC} from 'react';
import {View} from 'react-native';
import {ContainerProps} from './Layout';
import {layoutStyles} from './styles';

const InnerContainer: FC<ContainerProps> = ({children}) => (
  <View style={layoutStyles.innerContainer}>{children}</View>
);

export default InnerContainer;
