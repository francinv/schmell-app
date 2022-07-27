import React, {FC} from 'react';
import {Text} from 'react-native';
import colorStyles from '../../styles/color.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';

const SimpleText: FC<{text: string}> = ({text}) => (
  <Text
    style={[
      colorStyles.color_tertiary,
      textStyles.text_font_secondary,
      textStyles.text_30,
      textStyles.font_500,
      widthStyles(0).w_p_70,
      textStyles.text_center,
    ]}>
    {text}
  </Text>
);

export default SimpleText;
