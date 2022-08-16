/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import LinearGradientBorder from '../Styled/LinearGradientBorder';
import LinearGradient from 'react-native-linear-gradient';
import gameSettingStyles from '../../screens/GameSettings/style';
import {Pressable, Text} from 'react-native';

interface ToggleButtonProps {
  amountOfElements: number;
  selected: boolean;
  handlePress: () => void;
  content?: string;
  directionOfAnimation?: string;
}

interface SelectedToggleProps {
  width: string;
  content?: string;
  selected: boolean;
}

interface NotSelectedButtonProps {
  handlePress: () => void;
  selected: boolean;
  width: string;
  content?: string;
}

const SelectedToggle: FC<SelectedToggleProps> = ({
  width,
  content,
  selected,
}) => (
  <LinearGradientBorder width={width}>
    <LinearGradient
      colors={['#FFE869', '#FFD700']}
      style={gameSettingStyles.linearGradientContainer}>
      <Text
        style={[gameSettingStyles.selectedText, {opacity: selected ? 1 : 0.5}]}>
        {content}
      </Text>
    </LinearGradient>
  </LinearGradientBorder>
);

const NotSelectedButton: FC<NotSelectedButtonProps> = ({
  handlePress,
  selected,
  width,
  content,
}) => (
  <Pressable
    style={[{width: width}, gameSettingStyles.nonSelectedContainer]}
    onPress={handlePress}>
    <Text
      style={[
        gameSettingStyles.nonSelectedText,
        {opacity: selected ? 1 : 0.5},
      ]}>
      {content}
    </Text>
  </Pressable>
);

const ToggleButton: FC<ToggleButtonProps> = ({
  amountOfElements,
  handlePress,
  selected,
  content,
}) => {
  const getWidth = () => (100 / amountOfElements).toString() + '%';

  return (
    <>
      {selected ? (
        <SelectedToggle
          selected={selected}
          width={getWidth()}
          content={content}
        />
      ) : (
        <NotSelectedButton
          handlePress={handlePress}
          selected={selected}
          width={getWidth()}
          content={content}
        />
      )}
    </>
  );
};

export default ToggleButton;
