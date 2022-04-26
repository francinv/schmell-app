import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../styles/global.styles';

const LayoutContainer: React.FC = ({children}) => {
  return (
    <LinearGradient colors={['#1C0C5B', '#3D2C8D']} style={globalStyles.flex_1}>
      {children}
    </LinearGradient>
  );
};

export default LayoutContainer;
