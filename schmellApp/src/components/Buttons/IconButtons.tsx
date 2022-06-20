import React from 'react';
import {TouchableOpacity} from 'react-native';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import StoreIcon from '../../assets/icons/StoreIcon';
import BackIcon from '../../assets/icons/BackIcon';
import {SoundHighIcon, SoundLowIcon} from '../../assets/icons/SoundIcons';
import {Dispatch} from '@reduxjs/toolkit';
import {postVolume} from '../../features/usersettings/userSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import marginStyles from '../../styles/margin.styles';

interface ButtonProps {
  navigation: any;
}

interface SoundButtonProps {
  volume: number;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setVolume: (query: number) => dispatch(postVolume(query)),
});

export const StoreIconButton: React.FC<ButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Store')}
      style={[marginStyles.ml_10, marginStyles.mr_auto]}>
      <StoreIcon />
    </TouchableOpacity>
  );
};

export const SettingsIconButton: React.FC<ButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Settings')}
      style={[marginStyles.mr_10, marginStyles.ml_auto]}>
      <SettingsIcon />
    </TouchableOpacity>
  );
};

export const BackIconButton: React.FC<ButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={marginStyles.ml_10}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export const SoundLowIconButton: React.FC<SoundButtonProps> = ({volume}) => {
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

export const SoundHighIconButton: React.FC<SoundButtonProps> = ({volume}) => {
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
