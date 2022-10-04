import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import gameFunctionStyles from './style';

interface SimpleTextProps {
  text: string | number;
  style?: StyleProp<TextStyle>;
}

const SimpleText: FC<SimpleTextProps> = ({text, style}) => (
  <Text style={[gameFunctionStyles.simpleText, style]}>{text}</Text>
);

export default SimpleText;
