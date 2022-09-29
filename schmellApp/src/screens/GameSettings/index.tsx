import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Animated, KeyboardAvoidingView, Platform, View} from 'react-native';
import Header from '../../components/Header';
import InnerContainer from '../../components/Wrappers/InnerContainer';
import Layout from '../../components/Wrappers/Layout';
import {selectLanguage, selectPlayers} from '../../features/selectors';
import gameSettingStyles from './style';
import {getCurrentWeekNumber} from '../../utils/date';
/* import {settingsStateType} from '../../typings/common'; */
import PlayerDisplay from './PlayerDisplay';
/* import SettingsSection from './SettingsSection'; */
import PlayerInput from '../../components/Forms/PlayerInput';
import SchmellButton from '../../components/Buttons/SchmellButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  GameSettingsRouteProp,
  GameSettingsScreenNavigationProp,
} from '../../types/navigation';
import shakeButtonAnimation from '../../animations/moveAnimations/shakeAnimation';
import useLocale from '../../hooks/useLocale';
import {lockLandscape} from '../../utils/orientation';
import {
  useGetWeekQuery,
  useLazyGetQuestionsQuery,
} from '../../services/apiService';
import {ActivityIndicator} from 'react-native-paper';

export default () => {
  const players = useSelector(selectPlayers);
  const lang = useSelector(selectLanguage);

  const props = useRoute<GameSettingsRouteProp>();
  const navigation = useNavigation<GameSettingsScreenNavigationProp>();

  const {isSuccess, data} = useGetWeekQuery({
    idGame: props.params.selectedGameId,
    weekNumber: getCurrentWeekNumber(),
  });
  const [trigger, result] = useLazyGetQuestionsQuery();

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

  const handlePress = async () => {
    if (players.length < 4) {
      const buttonEndString: string =
        players.length === 3 ? playerString : playersString;
      shakeAnimation.setValue(0);
      setButtonText(
        `${buttonStartString} ${4 - players.length} ${buttonEndString}!`,
      );
      shakeButtonAnimation(shakeAnimation);
    } else {
      setButtonText("Let's go!");
      //fetch with trigger and use response
      if (isSuccess) {
        const {data: response} = await trigger({
          idWeek: data[0].id,
        });
        navigation.navigate('Game', {
          questions: response!,
        });
      }
      lockLandscape();
    }
  };

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
              wantShadow
              handlePress={handlePress}
              type={'L'}
              content={buttonText}
              additionalContainerStyling={marginStyling}
              additionalStyling={boxStyle}
              endIcon={
                result.isFetching && (
                  <ActivityIndicator animating color="black" />
                )
              }
            />
          </View>
        </KeyboardAvoidingView>
      </InnerContainer>
    </Layout>
  );
};
