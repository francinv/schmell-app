import React, {FC, ReactNode} from 'react';
import {Animated, Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import buttonStyles from './styles';

interface SchmellButtonProps {
  type: 'S' | 'M' | 'L';
  handlePress: () => void;
  content: string;
  wantShadow: boolean;
  endIcon?: ReactNode;
  additionalStyling?: any;
  additionalContainerStyling?: StyleProp<ViewStyle>;
}

const SchmellButton: FC<SchmellButtonProps> = ({
  type,
  handlePress,
  content,
  wantShadow,
  endIcon,
  additionalStyling,
  additionalContainerStyling,
}) => {
  const buttonStyling = () => {
    switch (type) {
      case 'S':
        return {
          button: buttonStyles.btnSmall,
          text: buttonStyles.textSmall,
          width: buttonStyles.widthSmall,
        };
      case 'M':
        return {
          button: buttonStyles.btnMedium,
          text: buttonStyles.textMedium,
          width: buttonStyles.widthMedium,
        };
      case 'L':
        return {
          button: buttonStyles.btnLarge,
          text: buttonStyles.textLarge,
          width: buttonStyles.widthLarge,
        };
    }
  };
  return (
    <Pressable
      onPress={handlePress}
      style={[buttonStyling().width, additionalContainerStyling]}>
      <Animated.View
        style={[
          buttonStyling().button,
          additionalStyling,
          wantShadow ? buttonStyles.btnShadow : null,
        ]}>
        <Text style={buttonStyling().text} textBreakStrategy="simple">
          {content}
        </Text>
        {endIcon}
      </Animated.View>
    </Pressable>
  );
};

export default SchmellButton;
