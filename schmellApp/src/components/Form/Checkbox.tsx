import React, {FC} from 'react';
import {Pressable} from 'react-native';
import CheckIcon from '../../assets/icons/CheckIcon';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import widthStyles from '../../styles/width.styles';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

const Checkbox: FC<Props> = ({isChecked, onCheck}) => (
  <Pressable
    onPress={onCheck}
    style={[
      widthStyles(35).w_custom,
      heightStyles(35).h_custom,
      globalStyles.border_radius_8,
      colorStyles.bg_senary,
      layoutStyles.flex_center,
    ]}>
    {isChecked ? <CheckIcon /> : null}
  </Pressable>
);

export default Checkbox;
