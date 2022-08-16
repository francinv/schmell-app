/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {Animated, KeyboardAvoidingView, Platform, View} from 'react-native';
import Header from '../../components/Header';
import InnerContainer from '../../components/Wrappers/InnerContainer';
import Layout from '../../components/Wrappers/Layout';
import {fetchQuestions, fetchWeek} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {
  selectedGame,
  selectLanguage,
  selectPlayers,
  selectWeeks,
} from '../../features/selectors';
import gameSettingStyles from './style';
import {getCurrentWeekNumber} from '../../utils/dateUtil';
/* import {settingsStateType} from '../../typings/common'; */
import PlayerDisplay from './PlayerDisplay';
/* import SettingsSection from './SettingsSection'; */
import PlayerInput from '../../components/Forms/PlayerInput';
import SchmellButton from '../../components/Buttons/SchmellButton';
import {useNavigation} from '@react-navigation/native';
import {GameScreenNavigationProp} from '../../typings/navigationTypes';
import shakeButtonAnimation from '../../animations/moveAnimations/shakeAnimation';
import useLocale from '../../hooks/useLocale';
import {lockToLandscape} from '../../utils/orientationLocker';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setWeek: (query: {weekNumber: number; idGame: number}) =>
    dispatch(fetchWeek(query)),
  setQuestions: (query: number) => dispatch(fetchQuestions(query)),
});

export default () => {
  const game = useSelector(selectedGame);
  const players = useSelector(selectPlayers);
  const week = useSelector(selectWeeks);
  const lang = useSelector(selectLanguage);

  const {setWeek, setQuestions} = actionDispatch(useAppDispatch());

  const [buttonText, setButtonText] = useState('Start');
  /* const [settingsState, setSettingsState] = useState<settingsStateType>({
    show: false,
    wantedSettings: '',
  }); */

  const marginStyling = {
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const playerString = useLocale(lang, 'BUTTON_PLAYER') as string;
  const playersString = useLocale(lang, 'BUTTON_PLAYERS') as string;
  const buttonStartString = useLocale(lang, 'BUTTON_MISSING') as string;

  const navigation = useNavigation<GameScreenNavigationProp>();

  const [shakeAnimation] = useState(new Animated.Value(0));

  const shakeInterpolated = shakeAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  const boxStyle = {
    transform: [
      {
        translateX: shakeInterpolated,
      },
    ],
  };

  const handlePress = () => {
    if (players.length < 4) {
      const buttonEndString: string =
        players.length === 3 ? playerString : playersString;
      shakeAnimation.setValue(0);
      setButtonText(
        `${buttonStartString} ${4 - players.length} ${buttonEndString}!`,
      );
      shakeButtonAnimation(shakeAnimation);
    } else {
      setQuestions(week.id);
      setButtonText("Let's go!");
      navigation.navigate('Game');
      lockToLandscape();
    }
  };

  useEffect(() => {
    setWeek({weekNumber: getCurrentWeekNumber(), idGame: game.id});
  }, [game]);

  return (
    <Layout>
      <Header />
      <InnerContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={gameSettingStyles.flex}>
          <PlayerDisplay interpolatedShake={shakeInterpolated} />
          <View style={gameSettingStyles.settingsContainer}>
            {/*<SettingsSection
              state={settingsState}
              setState={setSettingsState}
            />*/}
            <PlayerInput
              buttonText={buttonText}
              setButtonText={setButtonText}
              inputPlace={'Settings'}
            />
            <SchmellButton
              wantShadow={true}
              handlePress={handlePress}
              type={'L'}
              content={buttonText}
              additionalContainerStyling={marginStyling}
              additionalStyling={boxStyle}
            />
          </View>
        </KeyboardAvoidingView>
      </InnerContainer>
    </Layout>
  );
};