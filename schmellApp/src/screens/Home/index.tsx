/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Header from '../../components/Header';
import InnerContainer from '../../components/Wrappers/InnerContainer';
import Layout from '../../components/Wrappers/Layout';
import RNUniqueId from '../../native/RNUniqueId';
import HomeInner from './HomeInner';
import homeStyle from './style';
import {Dispatch} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../features/hooks';
import {fetchGames} from '../../features/game/gameSlice';
import {
  postSettings,
  setTokens,
} from '../../features/usersettings/userSettingSlice';
import encryptedStorageService from '../../services/encryptedStorageService';
import {userSettings} from '../../typings/settingsTypes';
import checkIfSettingsSet from '../../utils/checkIfSettingsSet';
import {useSelector} from 'react-redux';
import {selectGameStatus} from '../../features/selectors';
import {lockPortrait} from '../../utils/orientationLocker';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  fetchData: () => dispatch(fetchGames()),
  authToken: (query: string) => dispatch(setTokens(query)),
  setSettings: (query: userSettings) => dispatch(postSettings(query)),
});

export default () => {
  const {fetchData, authToken, setSettings} = actionDispatch(useAppDispatch());

  const gameStatus = useSelector(selectGameStatus);

  useEffect(() => {
    const {uniqueString} = RNUniqueId.getConstants();
    const hasToken = async () => {
      const token = await encryptedStorageService(
        `${uniqueString}_key`,
        '',
        'GET',
      );
      if (token === undefined || token === null) {
        authToken(uniqueString);
      }
    };

    const hasSettings = async () => {
      setSettings(await checkIfSettingsSet());
    };

    hasToken();
    hasSettings();

    if (gameStatus === 'idle') {
      fetchData();
    }

    lockPortrait();
  }, []);

  return (
    <Layout>
      <Header />
      <InnerContainer>
        <Image
          source={require('../../assets/images/logo.png')}
          style={homeStyle.img}
        />
        <HomeInner />
      </InnerContainer>
    </Layout>
  );
};
