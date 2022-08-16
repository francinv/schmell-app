import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {layoutStyles} from './styles';

export interface ContainerProps {
  children?: ReactNode;
  additionalStyling?: any;
}

const Layout: FC<ContainerProps> = ({children}) => (
  <View style={layoutStyles.container}>{children}</View>
);

export default Layout;
