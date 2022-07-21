import {Dispatch} from '@reduxjs/toolkit';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {setTeams} from '../../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../../features/hooks';
import {selectLanguage, selectTeams} from '../../../features/selectors';
import useLocale from '../../../locale/useLocale';
import colorStyles from '../../../styles/color.styles';
import globalStyles from '../../../styles/global.styles';
import heightStyles from '../../../styles/height.styles';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import textStyles from '../../../styles/text.styles';
import widthStyles from '../../../styles/width.styles';
import ToggleButton from '../../Buttons/ToggleButton';
import LinearGradientBorder from '../../StyleComponents/LinearGradientBorder';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  editTeams: (query: number) => dispatch(setTeams(query)),
});

const TeamComponent: FC = () => {
  const activeTeam = useSelector(selectTeams);
  const lang = useSelector(selectLanguage);
  const {editTeams} = actionDispatch(useAppDispatch());

  function handlePress(team: number) {
    editTeams(team);
  }

  function isSelected(content: number) {
    return activeTeam === content;
  }

  return (
    <View
      style={[
        widthStyles(0).w_p_90,
        marginStyles.mt_20,
        marginStyles.m_hor_auto,
      ]}>
      <Text
        style={[
          textStyles.text_font_primary,
          textStyles.text_25,
          colorStyles.color_tertiary,
          marginStyles.mb_20,
        ]}>
        {useLocale(lang, 'GAMESETTINGS_TEAMS')}
      </Text>
      <LinearGradientBorder width={'70%'}>
        <View
          style={[
            widthStyles(0).w_p_99,
            colorStyles.bg_senary,
            globalStyles.border_radius_100,
            heightStyles(0).h_p_96,
            layoutStyles.flex_row,
            layoutStyles.align_center,
          ]}>
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
      </LinearGradientBorder>
    </View>
  );
};

export default TeamComponent;
