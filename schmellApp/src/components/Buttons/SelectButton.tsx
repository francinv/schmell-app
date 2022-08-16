/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import buttonStyles from './styles';

interface SelectButtonProps {
  selected: boolean;
  content: string;
  handlePress: () => void;
  additionalStyling?: any;
}

const SelectButton: FC<SelectButtonProps> = ({
  handlePress,
  content,
  additionalStyling,
  selected,
}) => (
  <Pressable onPress={handlePress}>
    <Text
      style={[
        buttonStyles.selectText,
        additionalStyling,
        {opacity: selected ? 1 : 0.5},
      ]}>
      {content}
    </Text>
  </Pressable>
);

export default SelectButton;
