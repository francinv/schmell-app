import React, {FC, useEffect} from 'react';
import {Animated} from 'react-native';
import {useAppDispatch} from '../../features/hooks';
import slideAnimation from '../../animations/moveAnimations/slideAnimation';
import scaleAnimation from '../../animations/sizeAnimations/scaleAnimation';
import gameSettingStyles from './style';
import UserIcon from '../../assets/icons/UserIcon';
import IconButton from '../../components/Buttons/IconButton';
import {XIconPlayerDisplay} from '../../assets/icons/XIcon';
import actionDispatch from '../../features/dispatch';

interface NameProps {
  name: string;
  index: number;
  scaleValue: Animated.Value[];
  moveValue: Animated.Value[];
}

const PlayerName: FC<NameProps> = props => {
  const {index, name, scaleValue, moveValue} = props;

  const {removeFromList} = actionDispatch(useAppDispatch());

  const nameAnimationStyling = {
    transform: [
      {
        scale: scaleValue[index],
      },
      {
        translateX: moveValue[index],
      },
    ],
  };

  const handlePress = () => {
    removeFromList(index);
  };

  useEffect(() => {
    if (moveValue[1] !== undefined) {
      moveValue[1].setValue(-50);
      slideAnimation(moveValue[1]);
    }
    scaleValue[0].setValue(0);
    scaleAnimation(scaleValue[0]);
  }, [index, moveValue, scaleValue]);

  return (
    <Animated.View
      style={[gameSettingStyles.textContainer, nameAnimationStyling]}>
      <UserIcon />
      <Animated.Text style={gameSettingStyles.text}>{name}</Animated.Text>
      <IconButton
        handlePress={handlePress}
        additionalStyling={{alignSelf: 'flex-start'}}>
        <XIconPlayerDisplay />
      </IconButton>
    </Animated.View>
  );
};

export default PlayerName;
