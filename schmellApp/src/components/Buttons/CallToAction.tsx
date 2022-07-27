import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';

interface CallToActionProps {
  handleClick: () => void;
  content: string;
  customStyle: any | undefined;
}
const CallToAction: React.FC<CallToActionProps> = ({
  handleClick,
  content,
  customStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[
        widthStyles(0).w_p_60,
        heightStyles(40).h_custom,
        colorStyles.bg_primary,
        globalStyles.border_radius_4,
        layoutStyles.flex_container,
        marginStyles.m_hor_auto,
        marginStyles.mt_10,
        globalStyles.boxShadow,
        customStyle,
      ]}>
      <Text
        style={[
          textStyles.text_22,
          textStyles.text_font_primary,
          textStyles.text_center,
          paddingStyles.p_2,
          colorStyles.color_secondary,
        ]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default CallToAction;
