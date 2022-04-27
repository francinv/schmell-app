import React, {useEffect} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
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
import globalStyles from '../../styles/global.styles';
import {user_settings} from '../../typings/settingsTypes';
import {asyncStorageService} from '../../utils/updateAsyncStorage';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import Volume from './Components/Volume';
import Voice from './Components/Voice';

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

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={globalStyles.flex_1}>
        <Text style={styles.title}>Innstillinger</Text>
        <Volume />
        <Voice />
      </SafeAreaView>
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'CCBiffBamBoomW00-Regular',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    color: '#FFD700',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 20,
  },
});

export default SettingsComponent;
