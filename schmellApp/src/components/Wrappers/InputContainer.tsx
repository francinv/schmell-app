import React, {FC} from 'react';
import {View} from 'react-native';
import {ContainerProps} from './Layout';
import {layoutStyles} from './styles';

const InputContainer: FC<ContainerProps> = ({children}) => (
  <View style={layoutStyles.inputContainer}>{children}</View>
);

export default InputContainer;
