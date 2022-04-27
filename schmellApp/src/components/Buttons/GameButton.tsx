import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import globalStyles from '../../styles/global.styles';

interface GameButtonProps {
  id: number;
  name: string;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
});

const GameButton: React.FC<GameButtonProps> = ({id, name}) => {
  const {selectedGame} = actionDispatch(useAppDispatch());
  const handleClick = () => {
    selectedGame(id);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[styles.button, globalStyles.w_p_85, globalStyles.mt_30]}>
      <Text style={[styles.text]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD700',
    border: '0.5px solid #141400',
    height: 75,
    borderRadius: 8,
    shadowColor: '#AEAC99',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'CCBiffBamBoomW00-Regular',
    fontSize: 35,
    color: '#141400',
    letterSpacing: 0.05,
    padding: 10,
  },
});

export default GameButton;
