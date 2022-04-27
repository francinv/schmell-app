import React, {useEffect} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Image, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchFromStorage} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectGames} from '../../features/selectors';
import {setTokens} from '../../features/usersettings/userSettingSlice';
import globalStyles from '../../styles/global.styles';
import {encryptedStorageService} from '../../utils/EncryptedStorageUtil';
import LayoutContainer from '../Background/LayoutContainer';
import GameButton from '../Buttons/GameButton';
import Header from '../Header/Header';
import styles from './styles';
import DeviceInfo from 'react-native-device-info';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  authToken: (query: string) => dispatch(setTokens(query)),
  fetchData: () => dispatch(fetchFromStorage()),
});

const HomeComponent: React.FC = () => {
  const games = useSelector(selectGames);
  const {authToken, fetchData} = actionDispatch(useAppDispatch());

  useEffect(() => {
    const unique_ID = DeviceInfo.getUniqueId();
    async function checkUserHasToken() {
      const token = await encryptedStorageService(
        `${unique_ID}_key`,
        '',
        'GET',
      );
      if (token === undefined || token === null) {
        authToken(unique_ID);
      }
    }
    checkUserHasToken();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={[globalStyles.flex_1, styles.container]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={[
            styles.logo,
            globalStyles.ml_auto,
            globalStyles.mr_auto,
            globalStyles.w_p_90,
            globalStyles.mt_10,
          ]}
        />
        {games.map(game => (
          <GameButton key={game.id} id={game.id} name={game.name} />
        ))}
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default HomeComponent;
