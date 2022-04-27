import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../../features/hooks';
import {postVoice} from '../../features/usersettings/userSettingSlice';

interface ButtonProps {
  selected: boolean;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setVoice: (query: string) => dispatch(postVoice(query)),
});

export const FemaleEmojiButton: React.FC<ButtonProps> = ({selected}) => {
  const {setVoice} = actionDispatch(useAppDispatch());

  const handleClick = () => {
    setVoice('F');
  };

  if (selected) {
    return (
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.emoji}>🙋‍♀️</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={handleClick}>
        <Text style={[styles.emoji, styles.op]}>🙍‍♀️</Text>
      </TouchableOpacity>
    );
  }
};

export const MaleEmojiButton: React.FC<ButtonProps> = ({selected}) => {
  const {setVoice} = actionDispatch(useAppDispatch());
  const handleClick = () => {
    setVoice('M');
  };

  if (selected) {
    return (
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.emoji}>🙋‍♂️</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={handleClick}>
        <Text style={[styles.emoji, styles.op]}>🙎‍♂️</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 40,
  },
  op: {
    opacity: 0.5,
  },
});
