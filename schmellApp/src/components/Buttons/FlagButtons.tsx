import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../features/hooks';
import {postLanguage} from '../../features/usersettings/userSettingSlice';
import {Image, TouchableOpacity} from 'react-native';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import widthStyles from '../../styles/width.styles';

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
        style={[
          selected ? globalStyles.opacity_100 : globalStyles.opacity_50,
          heightStyles(40).h_custom,
          widthStyles(40).w_custom,
        ]}
      />
    </TouchableOpacity>
  );
};

export default FlagButton;
