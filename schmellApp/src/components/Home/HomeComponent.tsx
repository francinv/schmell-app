import React, {useEffect, useState} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Image, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../features/hooks';
import {selectGames} from '../../features/selectors';
import {setTokens} from '../../features/usersettings/userSettingSlice';
import {encryptedStorageService} from '../../utils/EncryptedStorageUtil';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import GameDetail from './GameDetail';
import layoutStyles from '../../styles/layout.styles';
import heightStyles from '../../styles/height.styles';
import marginStyles from '../../styles/margin.styles';
import widthStyles from '../../styles/width.styles';
import GameButton from '../Buttons/GameButton';
import {fetchGames} from '../../features/game/gameSlice';
import RNUniqueId from '../../native/RNUniqueId';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  authToken: (query: string) => dispatch(setTokens(query)),
  fetchData: () => dispatch(fetchGames()),
});
interface HomeInnerContentProps {
  handleShow: () => void;
}

const HomeComponent: React.FC = () => {
  const {authToken, fetchData} = actionDispatch(useAppDispatch());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function checkUserHasToken() {
      RNUniqueId.getUniqueString(async (result: string) => {
        const token = await encryptedStorageService(`${result}_key`, '', 'GET');
        console.log('token', token);
        if (token === undefined || token === null) {
          authToken(result);
        }
      });
    }
    checkUserHasToken();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleShow() {
    setOpen(wasOpen => !wasOpen);
  }

  return (
    <LayoutContainer>
      <Header />
      {open ? (
        <GameDetail handleShow={handleShow} />
      ) : (
        <HomeInnerContent handleShow={handleShow} />
      )}
    </LayoutContainer>
  );
};

const HomeInnerContent: React.FC<HomeInnerContentProps> = ({handleShow}) => {
  const games = useSelector(selectGames);

  return (
    <SafeAreaView style={[layoutStyles.flex_column, layoutStyles.align_center]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={[
          heightStyles(80).h_custom,
          marginStyles.m_hor_auto,
          widthStyles(0).w_p_90,
          marginStyles.mt_10,
        ]}
      />
      {games.map(game => (
        <GameButton
          key={game.id}
          id={game.id}
          name={game.name}
          handleShow={handleShow}
        />
      ))}
    </SafeAreaView>
  );
};

export default HomeComponent;
