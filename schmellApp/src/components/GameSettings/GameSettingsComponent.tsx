import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {SafeAreaView, Text} from 'react-native';
import {addPlayers} from '../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import PlayerDisplay from './Components/PlayerDisplay';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  pushPlayer: (player: string) => dispatch(addPlayers(player)),
});

const GameSettingsComponent: React.FC = () => {
  const {pushPlayer} = actionDispatch(useAppDispatch());

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView>
        <PlayerDisplay />
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default GameSettingsComponent;
