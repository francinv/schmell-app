import React from 'react';
import {SafeAreaView} from 'react-native';
import LayoutContainer from '../Background/LayoutContainer';
import Header from '../Header/Header';
import PlayerDisplay from './Components/PlayerDisplay';
import PlayerInput from './Components/PlayerInput';
import TeamComponent from './Components/TeamComponent';

const GameSettingsComponent: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView>
        <PlayerDisplay />
        <PlayerInput />
        <TeamComponent />
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default GameSettingsComponent;
