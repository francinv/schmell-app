import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {selectLanguage, selectTeams} from '../../features/selectors';
import {useAppDispatch} from '../../features/hooks';
import {Text, View} from 'react-native';
import gameSettingStyles from './style';
import useLocale from '../../hooks/useLocale';
import ToggleButton from '../../components/Buttons/ToggleButton';
import actionDispatch from '../../features/dispatch';

const Teams: FC = () => {
  const activeTeam = useSelector(selectTeams);
  const lang = useSelector(selectLanguage);

  const {editTeams} = actionDispatch(useAppDispatch());

  const handlePress = (team: number) => editTeams(team);
  const isSelected = (content: number) => activeTeam === content;

  return (
    <View style={gameSettingStyles.settingsInner}>
      <Text style={gameSettingStyles.settingsInnerTitle}>
        {useLocale(lang, 'GAMESETTINGS_TEAMS')}
      </Text>
      <View style={gameSettingStyles.settingsInnerInputContainer}>
        <ToggleButton
          amountOfElements={3}
          content={useLocale(lang, 'GAMESETTINGS_TEAMS_OPTIONS')[0]}
          handlePress={() => handlePress(0)}
          selected={isSelected(0)}
          directionOfAnimation={undefined}
        />
        <ToggleButton
          amountOfElements={3}
          content={useLocale(lang, 'GAMESETTINGS_TEAMS_OPTIONS')[1]}
          handlePress={() => handlePress(1)}
          selected={isSelected(1)}
          directionOfAnimation={undefined}
        />
        <ToggleButton
          amountOfElements={3}
          content={useLocale(lang, 'GAMESETTINGS_TEAMS_OPTIONS')[2]}
          handlePress={() => handlePress(2)}
          selected={isSelected(2)}
          directionOfAnimation={undefined}
        />
      </View>
    </View>
  );
};

export default Teams;
