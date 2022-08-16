import React, {FC} from 'react';
import {View} from 'react-native';
import {ContainerProps} from './Layout';
import {layoutStyles} from './styles';

const HomeWrapper: FC<ContainerProps> = ({children}) => (
  <View style={layoutStyles.innerWrapper}>{children}</View>
);

export default HomeWrapper;
