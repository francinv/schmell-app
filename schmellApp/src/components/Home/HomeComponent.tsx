import React, {FC, useEffect} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Image, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../features/hooks';
import {selectGameStatus} from '../../features/selectors';
import {
  fetchDetail,
  fetchSettings,
  postSettings,
  setTokens,
} from '../../features/usersettings/userSettingSlice';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import layoutStyles from '../../styles/layout.styles';
import heightStyles from '../../styles/height.styles';
import marginStyles from '../../styles/margin.styles';
import widthStyles from '../../styles/width.styles';
import {fetchGames} from '../../features/game/gameSlice';
import RNUniqueId from '../../native/RNUniqueId';
import HomeButtons from './GameButtons';
import Failed from './Failed';
import Loading from './Loading';
import {userSettings} from '../../typings/settingsTypes';
import {asyncStorageService} from '../../services/asyncStorageService';
import {LANGUAGE_KEY, SHOW_DETAIL_KEY, VOICE_KEY} from '../../constants/common';
import encryptedStorageService from '../../services/encryptedStorageService';
import {lockPortrait} from '../../utils/lockOrientation';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  authToken: (query: string) => dispatch(setTokens(query)),
  fetchData: () => dispatch(fetchGames()),
  getUserSettings: () => dispatch(fetchSettings()),
  setSettings: (query: userSettings) => dispatch(postSettings(query)),
  fetchGameDetail: () => dispatch(fetchDetail()),
});

const HomeComponent: FC = () => {
  const {authToken, fetchData, getUserSettings, setSettings, fetchGameDetail} =
    actionDispatch(useAppDispatch());

  useEffect(() => {
    lockPortrait();
    const {uniqueString} = RNUniqueId.getConstants();
    async function checkUserHasToken() {
      const token = await encryptedStorageService(
        `${uniqueString}_key`,
        '',
        'GET',
      );
      if (token === undefined || token === null) {
        authToken(uniqueString);
      }
    }
    async function checkIfSettingsSet() {
      let showDetail = await asyncStorageService(SHOW_DETAIL_KEY, '', 'GET');
      let voi_temp = await asyncStorageService(VOICE_KEY, '', 'GET');
      let lan_temp = await asyncStorageService(LANGUAGE_KEY, '', 'GET');
      if (voi_temp === undefined) {
        voi_temp = 'F';
      }
      if (lan_temp === undefined) {
        lan_temp = 'nb-NO';
      }
      if (!showDetail) {
        showDetail = [];
      }
      const temp = {
        voice: voi_temp,
        language: lan_temp,
        showDetail: showDetail,
      };
      setSettings(temp);
    }
    checkIfSettingsSet();
    getUserSettings();
    checkUserHasToken();
    fetchData();
    fetchGameDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutContainer>
      <Header />
      <HomeInnerContent />
    </LayoutContainer>
  );
};

const HomeInnerContent: FC = () => {
  const gameStatus = useSelector(selectGameStatus);

  const getContent = () => {
    if (gameStatus === 'loading') {
      return <Loading />;
    } else if (gameStatus === 'failed') {
      return <Failed />;
    } else if (gameStatus === 'succeeded') {
      return <HomeButtons />;
    }
  };

  return (
    <SafeAreaView
      style={[
        layoutStyles.flex_column,
        layoutStyles.align_center,
        layoutStyles.flex_1,
      ]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={[
          heightStyles(80).h_custom,
          marginStyles.m_hor_auto,
          widthStyles(0).w_p_90,
          marginStyles.mt_10,
        ]}
      />
      {getContent()}
    </SafeAreaView>
  );
};

export const HomeWrapper: FC = ({children}) => (
  <View
    style={[
      layoutStyles.flex_column,
      layoutStyles.align_center,
      widthStyles(0).w_p_90,
      layoutStyles.flex_1,
      layoutStyles.justify_evenly,
    ]}>
    {children}
  </View>
);

export default HomeComponent;
