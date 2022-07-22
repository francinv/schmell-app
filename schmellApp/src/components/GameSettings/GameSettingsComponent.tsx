import React, {useState} from 'react';
import {Animated, SafeAreaView, View} from 'react-native';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import LayoutContainer from '../Background/LayoutContainer';
import StartButton from '../Buttons/StartButton';
import Header from '../Header/Header';
import PlayerDisplay from './PlayerDisplay';
import PlayerInput from './PlayerInput';
import SettingsSection, {
  settingsState as settingsStateType,
} from './SettingsSection';

const GameSettingsComponent: React.FC = () => {
  const [settingsState, setSettingsState] = useState<settingsStateType>({
    show: false,
    wantedSettings: '',
  });

  const [buttonText, setButtonText] = useState('Start');
  const [shakeAnimation] = useState(new Animated.Value(0));
  const shakeInterpolated = shakeAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  return (
    <LayoutContainer>
      <Header />
      <SafeAreaView style={layoutStyles.flex_1}>
        <PlayerDisplay interpolatedShake={shakeInterpolated} />
        <View style={[colorStyles.bg_tertiary, globalStyles.border_top_20]}>
          <SettingsSection state={settingsState} setState={setSettingsState} />
          <PlayerInput
            inputPlace="Settings"
            buttonText={buttonText}
            setButtonText={setButtonText}
          />
          <StartButton
            buttonText={buttonText}
            setButtonText={setButtonText}
            shakeAnimation={shakeAnimation}
            interpolatedShake={shakeInterpolated}
          />
        </View>
      </SafeAreaView>
    </LayoutContainer>
  );
};

export default GameSettingsComponent;
