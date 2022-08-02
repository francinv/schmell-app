import React, {FC} from 'react';
import {Text} from 'react-native';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import textStyles from '../../styles/text.styles';

const SimpleText: FC<{text: string}> = ({text}) => (
  <Text
    style={[
      colorStyles.color_tertiary,
      textStyles.text_font_secondary,
      textStyles.text_30,
      textStyles.font_500,
      textStyles.text_center,
      globalStyles.z_100,
    ]}>
    {text}
  </Text>
);

export default SimpleText;
