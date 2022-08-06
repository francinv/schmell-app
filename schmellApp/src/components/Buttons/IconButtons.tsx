import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import StoreIcon from '../../assets/icons/StoreIcon';
import BackIcon from '../../assets/icons/BackIcon';
import marginStyles from '../../styles/margin.styles';
import LightBulbIcon from '../../assets/icons/LightBulbIcon';
import {XIconHeader, XIconModal} from '../../assets/icons/XIcon';
import {GamePlusIcon} from '../../assets/icons/PlusIcon';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import colorStyles from '../../styles/color.styles';
import widthStyles from '../../styles/width.styles';
import heightStyles from '../../styles/height.styles';
import PauseIcon from '../../assets/icons/PauseIcon';
import PlayIcon from '../../assets/icons/PlayIcon';

interface ButtonProps {
  onPress: () => void;
}

export const PlusIconButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={marginStyles.ml_auto}>
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

export const PlayPauseButton: FC<{
  started: boolean;
  onPress: () => void;
  finished: boolean;
}> = ({started, onPress, finished}) => (
  <TouchableOpacity
    disabled={finished}
    onPress={onPress}
    style={[
      layoutStyles.flex_center,
      colorStyles.bg_septenary,
      widthStyles(50).w_custom,
      heightStyles(50).h_custom,
      {borderRadius: 50 / 2},
    ]}>
    {started ? <PauseIcon /> : <PlayIcon />}
  </TouchableOpacity>
);
