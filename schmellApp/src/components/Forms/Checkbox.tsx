import React, {FC} from 'react';
import {Pressable} from 'react-native';
import CheckIcon from '../../assets/icons/CheckIcon';
import formStyles from './style';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

const Checkbox: FC<Props> = ({isChecked, onCheck}) => (
  <Pressable onPress={onCheck} style={formStyles.checkBox}>
    {isChecked ? <CheckIcon /> : null}
  </Pressable>
);

export default Checkbox;
