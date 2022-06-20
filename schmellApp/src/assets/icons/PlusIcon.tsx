import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const PlusIcon = () => (
  <Svg width={40} height={43} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.172 6.172C5 7.343 5 9.229 5 13v14c0 3.771 0 5.657 1.172 6.828C7.343 35 9.229 35 13 35h14c3.771 0 5.657 0 6.828-1.172C35 32.657 35 30.771 35 27V13c0-3.771 0-5.657-1.172-6.828C32.657 5 30.771 5 27 5H13C9.229 5 7.343 5 6.172 6.172ZM19 11.667V19h-7.333v2H19v7.333h2V21h7.333v-2H21v-7.333h-2Z"
        fill="gold"
      />
    </G>
  </Svg>
);

export default PlusIcon;
