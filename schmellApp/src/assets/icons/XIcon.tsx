import React, {FC} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const XIconHeader: FC = () => (
  <Svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={25} cy={25} r={18.75} stroke="gold" strokeWidth={3} />
    <Path
      d="m18.75 31.25 12.5-12.5M31.25 31.25l-12.5-12.5"
      stroke="gold"
      strokeWidth={3}
    />
  </Svg>
);

export const XIconModal: FC = () => (
  <Svg width={35} height={35} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={17.5} cy={17.5} r={13.125} stroke="#141400" strokeWidth={3} />
    <Path
      d="m13.125 21.875 8.75-8.75M21.875 21.875l-8.75-8.75"
      stroke="#141400"
      strokeWidth={3}
    />
  </Svg>
);

export const XIconPlayerDisplay: FC = () => (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m12 4-8 8M4 4l8 8"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
