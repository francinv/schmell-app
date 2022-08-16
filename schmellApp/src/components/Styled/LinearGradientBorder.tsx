import React, {FC, ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styledComponentStyles from './style';

interface LinearGradientBorderProps {
  width: string;
  children: ReactNode;
}

const LinearGradientBorder: FC<LinearGradientBorderProps> = ({
  children,
  width,
}) => {
  return (
    <LinearGradient
      colors={['#4D4D4D', '#141400']}
      style={[{width: width}, styledComponentStyles.linearGradientBorder]}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientBorder;
