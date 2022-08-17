import React, {FC} from 'react';
import {Text} from 'react-native';
import gameFunctionStyles from './style';

const SimpleText: FC<{text: string}> = ({text}) => (
  <Text style={gameFunctionStyles.simpleText}>{text}</Text>
);

export default SimpleText;
