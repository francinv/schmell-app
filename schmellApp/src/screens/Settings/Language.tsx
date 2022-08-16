import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import InputContainer from '../../components/Wrappers/InputContainer';
import SubTitle from '../../components/Styled/SubTitle';
import useLocale from '../../hooks/useLocale';
import settingStyles from './style';
import {View} from 'react-native';
import {postLanguage} from '../../features/usersettings/userSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import ImageButton from '../../components/Buttons/ImageButton';
import assetsUrls from '../../constants/assetsUrls';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setLanguage: (query: string) => dispatch(postLanguage(query)),
});

export default () => {
  const language = useSelector(selectLanguage);

  const {setLanguage} = actionDispatch(useAppDispatch());

  const handlePress = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <InputContainer>
      <SubTitle title={useLocale(language, 'SETTINGS_LANGUAGE') as string} />
      <View style={settingStyles.settingsFormContainer}>
        <ImageButton
          handlePress={() => handlePress('nb-NO')}
          imageUrl={assetsUrls.no}
          selected={language === 'nb-NO'}
          size={40}
        />
        <View style={settingStyles.divider} />
        <ImageButton
          handlePress={() => handlePress('en-GB')}
          imageUrl={assetsUrls.en}
          selected={language === 'en-GB'}
          size={40}
        />
        <View style={settingStyles.divider} />
        <ImageButton
          handlePress={() => handlePress('sv-SE')}
          imageUrl={assetsUrls.se}
          selected={language === 'sv-SE'}
          size={40}
        />
        <View style={settingStyles.divider} />
        <ImageButton
          handlePress={() => handlePress('da-DA')}
          imageUrl={assetsUrls.da}
          selected={language === 'da-DA'}
          size={40}
        />
      </View>
    </InputContainer>
  );
};
