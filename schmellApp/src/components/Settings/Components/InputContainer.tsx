import React from 'react';
import {View} from 'react-native';
import layoutStyles from '../../../styles/layout.styles';
import marginStyles from '../../../styles/margin.styles';
import widthStyles from '../../../styles/width.styles';

const InputContainer: React.FC = ({children}) => {
  return (
    <View
      style={[
        marginStyles.m_hor_auto,
        widthStyles(0).w_p_90,
        marginStyles.mt_30,
        layoutStyles.flex_column,
      ]}>
      {children}
    </View>
  );
};

export default InputContainer;
