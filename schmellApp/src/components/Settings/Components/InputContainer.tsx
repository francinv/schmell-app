import React from 'react';
import {View} from 'react-native';
import globalStyles from '../../../styles/global.styles';

const InputContainer: React.FC = ({children}) => {
  return (
    <View
      style={[
        globalStyles.m_hor_auto,
        globalStyles.w_p_90,
        globalStyles.mt_30,
        globalStyles.flex_column,
      ]}>
      {children}
    </View>
  );
};

export default InputContainer;
