import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';

interface LinearGradientBorderProps {
  width: string;
}

const LinearGradientBorder: FC<LinearGradientBorderProps> = ({
  children,
  width,
}) => {
  return (
    <LinearGradient
      colors={['#4D4D4D', '#141400']}
      style={[
        {width: width},
        marginStyles.m_hor_auto,
        globalStyles.border_radius_100,
        heightStyles(30).h_custom,
        layoutStyles.flex_center,
      ]}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientBorder;
