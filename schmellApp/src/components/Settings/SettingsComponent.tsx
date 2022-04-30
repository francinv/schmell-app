import React, {useEffect} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Linking, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {LANGUAGE_KEY, VOICE_KEY, VOLUME_KEY} from '../../constants/common';
import {useAppDispatch} from '../../features/hooks';
import {
  selectLanguage,
  selectVoice,
  selectVolume,
} from '../../features/selectors';
import {
  fetchSettings,
  postSettings,
} from '../../features/usersettings/userSettingSlice';
import {user_settings} from '../../typings/settingsTypes';
import {asyncStorageService} from '../../utils/updateAsyncStorage';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import Volume from './Components/Volume';
import Voice from './Components/Voice';
import Language from './Components/Language';
import Social from './Components/Social';
import CallToAction from '../Buttons/CallToAction';
import layoutStyles from '../../styles/layout.styles';
import textStyles from '../../styles/text.styles';
import colorStyles from '../../styles/color.styles';
import marginStyles from '../../styles/margin.styles';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  getUserSettings: () => dispatch(fetchSettings()),
  setSettings: (query: user_settings) => dispatch(postSettings(query)),
});

const SettingsComponent: React.FC = () => {
  const volume = useSelector(selectVolume);
  const voice = useSelector(selectVoice);
  const language = useSelector(selectLanguage);
  const {getUserSettings, setSettings} = actionDispatch(useAppDispatch());

  useEffect(() => {
    async function checkIfSettingsSet() {
      let vol_temp = await asyncStorageService(VOLUME_KEY, '', 'GET');
      let voi_temp = await asyncStorageService(VOICE_KEY, '', 'GET');
      let lan_temp = await asyncStorageService(LANGUAGE_KEY, '', 'GET');
      if (vol_temp === undefined) {
        vol_temp = 3;
      }
      if (voi_temp === undefined) {
        voi_temp = 'F';
      }
      if (lan_temp === undefined) {
        lan_temp = 'nb-NO';
      }
      const temp = {
        volume: vol_temp,
        voice: voi_temp,
        language: lan_temp,
      };
      setSettings(temp);
    }
    checkIfSettingsSet();
    getUserSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume, voice, language]);

  async function handleClick() {
    const url = 'mailto:schmellapp@gmail.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  }

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={layoutStyles.flex_1}>
        <Text
          style={[
            textStyles.text_font_primary,
            textStyles.text_30,
            colorStyles.color_primary,
            marginStyles.m_ver_20,
            marginStyles.ml_15,
            textStyles.text_shadow,
          ]}>
          Innstillinger
        </Text>
        <Volume />
        <Voice />
        <Language />
        <Social />
        <CallToAction handleClick={handleClick} content="Kontakt oss" />
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default SettingsComponent;
