import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../features/hooks';
import {postLanguage} from '../../features/usersettings/userSettingSlice';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface FlagButtonProps {
  locale: string;
  selected: boolean;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setLanguage: (query: string) => dispatch(postLanguage(query)),
});

const FlagButton: React.FC<FlagButtonProps> = ({locale, selected}) => {
  const {setLanguage} = actionDispatch(useAppDispatch());

  function getUrl() {
    switch (locale) {
      case 'nb-NO':
        return require('../../assets/images/nb-NO.png');
      case 'en-GB':
        return require('../../assets/images/en-GB.png');
      case 'sv-SE':
        return require('../../assets/images/sv-SE.png');
      case 'da-DA':
        return require('../../assets/images/da-DA.png');
      default:
        return require('../../assets/images/nb-NO.png');
    }
  }

  return (
    <TouchableOpacity onPress={() => setLanguage(locale)}>
      <Image
        source={getUrl()}
        style={[selected ? styles.selected : styles.unselected, styles.image]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  unselected: {
    opacity: 0.5,
  },
  selected: {
    opacity: 1,
  },
  buttonStyle: {
    width: 40,
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
  },
});
export default FlagButton;
