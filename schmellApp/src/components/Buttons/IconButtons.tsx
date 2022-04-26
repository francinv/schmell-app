import React from 'react';
import {TouchableOpacity} from 'react-native';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import StoreIcon from '../../assets/icons/StoreIcon';
import BackIcon from '../../assets/icons/BackIcon';
import globalStyles from '../../styles/global.styles';

interface ButtonProps {
  navigation: any;
}

export const StoreIconButton: React.FC<ButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Store')}
      style={[globalStyles.ml_10, globalStyles.mr_auto]}>
      <StoreIcon />
    </TouchableOpacity>
  );
};

export const SettingsIconButton: React.FC<ButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Settings')}
      style={[globalStyles.mr_10, globalStyles.ml_auto]}>
      <SettingsIcon />
    </TouchableOpacity>
  );
};

export const BackIconButton: React.FC<ButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={globalStyles.ml_10}>
      <BackIcon />
    </TouchableOpacity>
  );
};
