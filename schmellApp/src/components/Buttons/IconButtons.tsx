import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import StoreIcon from '../../assets/icons/StoreIcon';
import BackIcon from '../../assets/icons/BackIcon';
import {SoundHighIcon, SoundLowIcon} from '../../assets/icons/SoundIcons';
import {Dispatch} from '@reduxjs/toolkit';
import {postVolume} from '../../features/usersettings/userSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import marginStyles from '../../styles/margin.styles';
import LightBulbIcon from '../../assets/icons/LightBulbIcon';
import {XIconHeader, XIconModal} from '../../assets/icons/XIcon';
import {GamePlusIcon} from '../../assets/icons/PlusIcon';
import globalStyles from '../../styles/global.styles';

interface ButtonProps {
  onPress: () => void;
}

interface SoundButtonProps {
  volume: number;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setVolume: (query: number) => dispatch(postVolume(query)),
});

export const PlusIconButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <GamePlusIcon />
    </TouchableOpacity>
  );
};

export const XHeaderButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <XIconHeader />
    </TouchableOpacity>
  );
};

export const XModalButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.modalButton}>
      <XIconModal />
    </TouchableOpacity>
  );
};

export const LightBulbButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LightBulbIcon />
    </TouchableOpacity>
  );
};

export const StoreIconButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[marginStyles.ml_10, marginStyles.mr_auto]}>
      <StoreIcon />
    </TouchableOpacity>
  );
};

export const SettingsIconButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[marginStyles.mr_10, marginStyles.ml_auto]}>
      <SettingsIcon />
    </TouchableOpacity>
  );
};

export const BackIconButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={marginStyles.ml_10}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export const SoundLowIconButton: FC<SoundButtonProps> = ({volume}) => {
  const {setVolume} = actionDispatch(useAppDispatch());

  const handleClick = () => {
    if (volume > 0) {
      setVolume(volume - 1);
    } else {
      setVolume(0);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      disabled={volume === 0 ? true : false}>
      <SoundLowIcon disabled={volume === 0 ? true : false} />
    </TouchableOpacity>
  );
};

export const SoundHighIconButton: FC<SoundButtonProps> = ({volume}) => {
  const {setVolume} = actionDispatch(useAppDispatch());

  const handleClick = () => {
    if (volume < 6) {
      setVolume(volume + 1);
    } else {
      setVolume(6);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      disabled={volume === 6 ? true : false}>
      <SoundHighIcon disabled={volume === 6 ? true : false} />
    </TouchableOpacity>
  );
};
