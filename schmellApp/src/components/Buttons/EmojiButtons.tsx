import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {Text, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../../features/hooks';
import {postVoice} from '../../features/usersettings/userSettingSlice';
import textStyles from '../../styles/text.styles';
import globalStyles from '../../styles/global.styles';

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
        <Text style={textStyles.text_40}>🙋‍♀️</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={handleClick}>
        <Text style={[textStyles.text_40, globalStyles.opacity_50]}>🙍‍♀️</Text>
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
        <Text style={textStyles.text_40}>🙋‍♂️</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={handleClick}>
        <Text style={[textStyles.text_40, globalStyles.opacity_50]}>🙎‍♂️</Text>
      </TouchableOpacity>
    );
  }
};
