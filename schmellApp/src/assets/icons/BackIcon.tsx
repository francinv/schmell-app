import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = () => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.667 16.667 5.252 18.08l-1.414-1.414 1.414-1.415 1.415 1.415ZM35.333 30a2 2 0 1 1-4 0h4Zm-21.747-3.586-8.334-8.333 2.829-2.829 8.333 8.334-2.828 2.828ZM5.252 15.252l8.334-8.333 2.828 2.829-8.333 8.333-2.829-2.829Zm1.415-.585h20.666v4H6.667v-4Zm28.666 8V30h-4v-7.333h4Zm-8-8a8 8 0 0 1 8 8h-4a4 4 0 0 0-4-4v-4Z"
      fill="gold"
    />
  </Svg>
);

export default BackIcon;
