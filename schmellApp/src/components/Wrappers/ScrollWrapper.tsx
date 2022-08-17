import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {ContainerProps} from './Layout';
import {layoutStyles} from './styles';

const ScrollWrapper: FC<ContainerProps> = ({children}) => (
  <ScrollView
    style={layoutStyles.scrollContainer}
    contentContainerStyle={layoutStyles.scrollContent}>
    {children}
  </ScrollView>
);

export default ScrollWrapper;
