import React from 'react';
import Svg, {Rect} from 'react-native-svg';

export default () => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect
      x={10}
      y={8.333}
      width={6.667}
      height={23.333}
      rx={1}
      fill="gold"
      stroke="gold"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <Rect
      x={23.333}
      y={8.333}
      width={6.667}
      height={23.333}
      rx={1}
      fill="gold"
      stroke="gold"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </Svg>
);
