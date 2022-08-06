import React from 'react';
import Svg, {Path} from 'react-native-svg';
import globalStyles from '../../styles/global.styles';

export default () => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={globalStyles.iconLeftTop}>
    <Path
      d="M8 2.667A2.667 2.667 0 1 0 8 8a2.667 2.667 0 0 0 0-5.333ZM4 5.333a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM5.333 12a2 2 0 0 0-2 2A.667.667 0 1 1 2 14a3.333 3.333 0 0 1 3.333-3.333h5.334A3.333 3.333 0 0 1 14 14a.667.667 0 0 1-1.333 0 2 2 0 0 0-2-2H5.333Z"
      fill="#fff"
    />
  </Svg>
);
