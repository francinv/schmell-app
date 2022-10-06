import React, {FC, ReactNode} from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import buttonStyles from './styles';

interface IconButtonProps {
  children: ReactNode;
  handlePress: () => void;
  additionalStyling?: StyleProp<ViewStyle>;
  disabled?: boolean;
  wantShadow?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  children,
  handlePress,
  additionalStyling,
  disabled,
  wantShadow,
}) => (
  <Pressable
    onPress={handlePress}
    style={[
      buttonStyles.iconButton,
      additionalStyling,
      wantShadow && buttonStyles.btnShadow,
    ]}
    disabled={disabled}>
    {children}
  </Pressable>
);

export default IconButton;
