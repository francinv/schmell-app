import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import LinearGradientBorder from '../StyleComponents/LinearGradientBorder';

interface ToggleButtonProps {
  amountOfElements: number;
  selected: boolean;
  handlePress: () => void;
  content: string | undefined;
  directionOfAnimation: string | undefined;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  amountOfElements,
  selected,
  handlePress,
  content,
}) => {
  function getWidth() {
    return (100 / amountOfElements).toString() + '%';
  }

  function handleClick() {
    handlePress();
  }

  if (selected) {
    return (
      <LinearGradientBorder width={getWidth()}>
        <LinearGradient
          colors={['#FFE869', '#FFD700']}
          style={[
            widthStyles(0).w_p_99,
            heightStyles(0).h_p_90,
            globalStyles.border_radius_100,
            layoutStyles.flex_center,
          ]}>
          <Text
            style={[
              colorStyles.color_secondary,
              selected ? globalStyles.opacity_100 : globalStyles.opacity_50,
              textStyles.text_font_primary,
              textStyles.text_center,
              paddingStyles.p_2,
            ]}>
            {content}
          </Text>
        </LinearGradient>
      </LinearGradientBorder>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          {width: getWidth()},
          heightStyles(0).h_p_100,
          layoutStyles.flex_center,
        ]}
        onPress={handleClick}>
        <Text
          style={[
            colorStyles.color_secondary,
            selected ? globalStyles.opacity_100 : globalStyles.opacity_50,
            textStyles.text_font_primary,
            textStyles.text_center,
            paddingStyles.p_2,
          ]}>
          {content}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default ToggleButton;
