import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {TouchableOpacity} from 'react-native';
import PlusIcon from '../../assets/icons/PlusIcon';
import {addPlayers} from '../../features/gamesettings/gameSettingSlice';
import {useAppDispatch} from '../../features/hooks';
import globalStyles from '../../styles/global.styles';
import marginStyles from '../../styles/margin.styles';

const actionDispatch = (dispatch: Dispatch<any>) => ({
  addPlayer: (query: string) => dispatch(addPlayers(query)),
});

interface AddPlayerButtonProps {
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  inputPlace: 'Settings' | 'InGame';
}

const AddPlayerButton: React.FC<AddPlayerButtonProps> = ({
  player,
  setPlayer,
  inputPlace,
}) => {
  const {addPlayer} = actionDispatch(useAppDispatch());

  function handlePress() {
    if (player) {
      addPlayer(player);
    }
    setPlayer('');
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[marginStyles.ml_auto, globalStyles.boxShadow]}>
      <PlusIcon color={inputPlace === 'Settings' ? 'gold' : 'black'} />
    </TouchableOpacity>
  );
};

export default AddPlayerButton;
