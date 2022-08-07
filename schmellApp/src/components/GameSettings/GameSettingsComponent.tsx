import {Dispatch} from '@reduxjs/toolkit';
import React, {FC, useEffect, useState} from 'react';
import {Animated, KeyboardAvoidingView, Platform, View} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchWeek} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectedGame} from '../../features/selectors';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import paddingStyles from '../../styles/padding.styles';
import {getCurrentWeekNumber} from '../../utils/dateUtil';
import LayoutContainer from '../Background/LayoutContainer';
import StartButton from '../Buttons/StartButton';
import Header from '../Header/Header';
import PlayerDisplay from './PlayerDisplay';
import PlayerInput from './PlayerInput';
/* import SettingsSection, {
  settingsState as settingsStateType,
} from './SettingsSection'; */

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setWeek: (query: {weekNumber: number; idGame: number}) =>
    dispatch(fetchWeek(query)),
});

const GameSettingsComponent: FC = () => {
  /* const [settingsState, setSettingsState] = useState<settingsStateType>({
    show: false,
    wantedSettings: '',
  }); */
  const game = useSelector(selectedGame);
  const {setWeek} = actionDispatch(useAppDispatch());

  useEffect(() => {
    setWeek({weekNumber: getCurrentWeekNumber(), idGame: game.id});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game]);

  const [buttonText, setButtonText] = useState('Start');
  const [shakeAnimation] = useState(new Animated.Value(0));
  const shakeInterpolated = shakeAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  return (
    <LayoutContainer>
      <Header />
      <View style={layoutStyles.flex_1}>
        <KeyboardAvoidingView
          style={layoutStyles.flex_1}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <PlayerDisplay interpolatedShake={shakeInterpolated} />
          <View
            style={[
              colorStyles.bg_tertiary,
              globalStyles.border_top_20,
              paddingStyles.pb_20,
            ]}>
            {/* <SettingsSection
              state={settingsState}
              setState={setSettingsState}
            /> */}
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
        </KeyboardAvoidingView>
      </View>
    </LayoutContainer>
  );
};

export default GameSettingsComponent;
