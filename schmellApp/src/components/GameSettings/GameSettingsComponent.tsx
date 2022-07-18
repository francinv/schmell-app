import React from 'react';
import {SafeAreaView} from 'react-native';
import LayoutContainer from '../Background/LayoutContainer';
import StartButton from '../Buttons/StartButton';
import Header from '../Header/Header';
import PlayerDisplay from './Components/PlayerDisplay';
import PlayerInput from './Components/PlayerInput';
import ReadOut from './Components/ReadOut';
import TeamComponent from './Components/TeamComponent';

const GameSettingsComponent: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView>
        <PlayerDisplay />
        <PlayerInput inputPlace="Settings" />
        <TeamComponent />
        <ReadOut />
        <StartButton />
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default GameSettingsComponent;
