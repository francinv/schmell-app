import React, {FC} from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {IconProps} from './props';

export const PlusIcon: FC<IconProps> = ({color}) => (
  <Svg width={45} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.797 6.797c-1.172 1.171-1.172 3.057-1.172 6.828v17.75c0 3.771 0 5.657 1.172 6.828 1.171 1.172 3.057 1.172 6.828 1.172h17.75c3.771 0 5.657 0 6.828-1.172 1.172-1.171 1.172-3.057 1.172-6.828v-17.75c0-3.771 0-5.657-1.172-6.828-1.171-1.172-3.057-1.172-6.828-1.172h-17.75c-3.771 0-5.657 0-6.828 1.172ZM21.5 13.125V21.5h-8.375v2H21.5v8.375h2V23.5h8.375v-2H23.5v-8.375h-2Z"
        fill={color}
      />
    </G>
  </Svg>
);

export const GamePlusIcon = () => (
  <Svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={25} cy={25} r={18.75} stroke="gold" strokeWidth={3} />
    <Path
      d="M25 31.25v-12.5M31.25 25h-12.5"
      stroke="gold"
      strokeWidth={3}
      strokeLinecap="square"
    />
  </Svg>
);
