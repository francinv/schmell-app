/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Image, ImageSourcePropType, Pressable} from 'react-native';

interface ImageButtonProps {
  selected: boolean;
  imageUrl: ImageSourcePropType;
  handlePress: () => void;
  size: number;
}

const ImageButton: FC<ImageButtonProps> = ({
  handlePress,
  imageUrl,
  selected,
  size,
}) => (
  <Pressable onPress={handlePress}>
    <Image
      source={imageUrl}
      style={[{opacity: selected ? 1 : 0.5, height: size, width: size}]}
    />
  </Pressable>
);

export default ImageButton;
