import React, {useState} from 'react';
import {Animated, SafeAreaView} from 'react-native';
import LayoutContainer from '../Background/LayoutContainer';
import StartButton from '../Buttons/StartButton';
import Header from '../Header/Header';
import PlayerDisplay from './Components/PlayerDisplay';
import PlayerInput from './Components/PlayerInput';
import ReadOut from './Components/ReadOut';
import TeamComponent from './Components/TeamComponent';

const GameSettingsComponent: React.FC = () => {
  const [buttonText, setButtonText] = useState('Start');
  const [shakeAnimation] = useState(new Animated.Value(0));
  const shakeInterpolated = shakeAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView>
        <PlayerDisplay interpolatedShake={shakeInterpolated} />
        <PlayerInput
          inputPlace="Settings"
          buttonText={buttonText}
          setButtonText={setButtonText}
        />
        <TeamComponent />
        <ReadOut />
        <StartButton
          buttonText={buttonText}
          setButtonText={setButtonText}
          shakeAnimation={shakeAnimation}
          interpolatedShake={shakeInterpolated}
        />
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default GameSettingsComponent;
