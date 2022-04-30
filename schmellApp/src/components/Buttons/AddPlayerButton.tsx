import {Dispatch} from '@reduxjs/toolkit';
import React from 'react';
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
}

const AddPlayerButton: React.FC<AddPlayerButtonProps> = ({
  player,
  setPlayer,
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
      <PlusIcon />
    </TouchableOpacity>
  );
};

export default AddPlayerButton;
