import React, {Dispatch, FC, SetStateAction} from 'react';
import {TextInput} from 'react-native';
import formStyles from './style';

interface SchmellInputProps {
  value: string;
  onChange: () => void;
  onChangeText: Dispatch<SetStateAction<string>>;
  placeHolderTextColor?: string;
  placeholder?: string;
}

const SchmellInput: FC<SchmellInputProps> = ({
  onChange,
  onChangeText,
  value,
  placeHolderTextColor,
  placeholder,
}) => (
  <TextInput
    style={formStyles.textInput}
    placeholderTextColor={placeHolderTextColor}
    value={value}
    onChange={onChange}
    onChangeText={onChangeText}
    placeholder={placeholder}
  />
);

export default SchmellInput;
