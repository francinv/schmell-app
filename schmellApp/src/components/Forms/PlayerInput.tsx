/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Dispatch as ReduxDispatch} from '@reduxjs/toolkit';
import SchmellInput from './SchmellInput';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import formStyles from './style';
import {addPlayers} from '../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import IconButton from '../Buttons/IconButton';
import {PlusIcon} from '../../assets/icons/PlusIcon';

interface InputProps {
  inputPlace: 'Settings' | 'InGame';
  buttonText?: string;
  setButtonText?: Dispatch<SetStateAction<string>>;
  callback?: () => void;
}

const actionDispatch = (dispatch: ReduxDispatch<any>) => ({
  addPlayer: (query: string) => dispatch(addPlayers(query)),
});

const PlayerInput: FC<InputProps> = props => {
  const {buttonText, inputPlace, setButtonText, callback} = props;

  const [player, setPlayer] = useState('');

  const lang = useSelector(selectLanguage);

  const {addPlayer} = actionDispatch(useAppDispatch());

  const isSettings = inputPlace === 'Settings';

  const handleChange = () => {
    if (inputPlace === 'Settings' && buttonText !== 'Start' && setButtonText) {
      setButtonText('Start');
    }
  };

  const handlePress = () => {
    if (player) {
      addPlayer(player);
      if (callback) {
        callback();
      }
    }
    setPlayer('');
  };

  return (
    <View
      style={[
        {width: isSettings ? '90%' : '70%'},
        formStyles.playerInputContainer,
      ]}>
      <SchmellInput
        onChange={handleChange}
        onChangeText={setPlayer}
        value={player}
        placeHolderTextColor={
          isSettings ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
        }
        placeholder={useLocale(lang, 'PLAYER_INPUT_PLACEHOLDER') as string}
      />
      <IconButton handlePress={handlePress}>
        <PlusIcon color={isSettings ? 'gold' : 'black'} />
      </IconButton>
    </View>
  );
};

export default PlayerInput;
