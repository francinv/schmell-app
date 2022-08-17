import React, {FC} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {setReadOut} from '../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectLanguage, selectReadOut} from '../../features/selectors';
import {Text, View} from 'react-native';
import gameSettingStyles from './style';
import useLocale from '../../hooks/useLocale';
import ToggleButton from '../../components/Buttons/ToggleButton';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  readOut: (query: boolean) => dispatch(setReadOut(query)),
});

const ReadOut: FC = () => {
  const {readOut} = actionDispatch(useAppDispatch());

  const isReadOut = useSelector(selectReadOut);
  const lang = useSelector(selectLanguage);

  const handlePress = (editReadOut: boolean) => readOut(editReadOut);
  const isSelected = (content: boolean) => isReadOut === content;

  return (
    <View style={gameSettingStyles.settingsInner}>
      <Text style={gameSettingStyles.settingsInnerTitle}>
        {useLocale(lang, 'GAMESETTINGS_READOUT')}
      </Text>
      <View style={gameSettingStyles.settingsInnerInputContainer}>
        <ToggleButton
          amountOfElements={2}
          content={useLocale(lang, 'GAMESETTINGS_READOUT_OPTIONS')[0]}
          handlePress={() => handlePress(true)}
          selected={isSelected(true)}
        />
        <ToggleButton
          amountOfElements={2}
          content={useLocale(lang, 'GAMESETTINGS_READOUT_OPTIONS')[1]}
          handlePress={() => handlePress(false)}
          selected={isSelected(false)}
        />
      </View>
    </View>
  );
};

export default ReadOut;
