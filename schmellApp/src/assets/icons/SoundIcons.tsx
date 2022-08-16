import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface SoundProps {
  disabled: boolean;
}

export const SoundLowIcon: FC<SoundProps> = ({disabled}) => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.93 23.218a6.254 6.254 0 0 1 0-6.436 2.502 2.502 0 0 1 1.655-1.166l2.822-.564a.751.751 0 0 0 .43-.255l5.334-6.402c1.182-1.42 1.774-2.129 2.301-1.938C20 6.648 20 7.572 20 9.42v21.162c0 1.847 0 2.77-.528 2.962-.527.19-1.119-.519-2.301-1.938l-5.335-6.402a.751.751 0 0 0-.43-.255l-2.82-.564a2.502 2.502 0 0 1-1.655-1.166Z"
      fill={disabled ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 215, 0, 1)'}
    />
    <Path
      d="M24.226 14.107a8.333 8.333 0 0 1 .046 11.739"
      stroke={disabled ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 215, 0, 1)'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export const SoundHighIcon: FC<SoundProps> = ({disabled}) => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.93 23.218a6.254 6.254 0 0 1 0-6.436 2.502 2.502 0 0 1 1.655-1.166l2.822-.564a.751.751 0 0 0 .43-.255l5.334-6.402c1.182-1.42 1.774-2.129 2.301-1.938C20 6.648 20 7.572 20 9.42v21.162c0 1.847 0 2.77-.528 2.962-.527.19-1.119-.519-2.301-1.938l-5.335-6.402a.751.751 0 0 0-.43-.255l-2.82-.564a2.502 2.502 0 0 1-1.655-1.166Z"
      fill={disabled ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 215, 0, 1)'}
    />
    <Path
      d="M24.226 14.107a8.333 8.333 0 0 1 .046 11.739M31.095 10.572a13.334 13.334 0 0 1 .074 18.782"
      stroke={disabled ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 215, 0, 1)'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
