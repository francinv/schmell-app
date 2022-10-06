import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Header from '../../components/Header';
import InnerContainer from '../../components/Wrappers/InnerContainer';
import Layout from '../../components/Wrappers/Layout';
import HomeInner from './HomeInner';
import homeStyle from './style';
import {Dispatch} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../features/hooks';
import {postSettings} from '../../features/usersettings/userSettingSlice';
import {userSettings} from '../../types/settings';
import checkIfSettingsSet from '../../utils/checkIfSettingsSet';
import {useSelector} from 'react-redux';
import {selectUserStatus} from '../../features/selectors';
import {lockPortrait} from '../../utils/orientation';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setSettings: (query: userSettings) => dispatch(postSettings(query)),
});

export default () => {
  const {setSettings} = actionDispatch(useAppDispatch());

  const userSettingStatus = useSelector(selectUserStatus);

  useEffect(() => {
    const hasSettings = async () => {
      setSettings(await checkIfSettingsSet());
    };

    if (userSettingStatus === 'idle') {
      hasSettings();
    }

    lockPortrait();
  }, [setSettings, userSettingStatus]);

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
