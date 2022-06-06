import React, {useEffect, useState} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Image, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchFromStorage} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectGames} from '../../features/selectors';
import {setTokens} from '../../features/usersettings/userSettingSlice';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {encryptedStorageService} from '../../utils/EncryptedStorageUtil';
import LayoutContainer from '../Background/LayoutContainer';
import GameButton from '../Buttons/GameButton';
import Header from '../Header/Header';
import GameDetail from './GameDetail';
import layoutStyles from '../../styles/layout.styles';
import heightStyles from '../../styles/height.styles';
import marginStyles from '../../styles/margin.styles';
import widthStyles from '../../styles/width.styles';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  authToken: (query: string) => dispatch(setTokens(query)),
  fetchData: () => dispatch(fetchFromStorage()),
});

interface HomeInnerContentProps {
  handleShow: () => void;
}

const HomeComponent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {authToken, fetchData} = actionDispatch(useAppDispatch());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const unique_ID = DeviceInfo.getUniqueId();
    // async function checkUserHasToken() {
    //   const token = await encryptedStorageService(
    //     `${unique_ID}_key`,
    //     '',
    //     'GET',
    //   );
    //   if (token === undefined || token === null) {
    //     authToken(unique_ID);
    //   }
    // }
    // checkUserHasToken();
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
