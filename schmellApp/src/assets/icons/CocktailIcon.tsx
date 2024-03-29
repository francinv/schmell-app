import React, {FC} from 'react';
import Svg, {Mask, Path} from 'react-native-svg';

const CocktailIcon: FC<{color: string}> = ({color}) => (
  <Svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M18.75 43.75h12.5M25 43v-9"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Mask id="a" fill="#fff">
      <Path d="M10.417 18.667c0-.943 0-1.415.293-1.708.292-.292.764-.292 1.707-.292h25.166c.943 0 1.415 0 1.707.292.293.293.293.765.293 1.708v4.75c0 5.656 0 8.485-1.757 10.242-1.757 1.758-4.586 1.758-10.243 1.758h-5.166c-5.657 0-8.486 0-10.243-1.758-1.757-1.757-1.757-4.585-1.757-10.242v-4.75Z" />
    </Mask>
    <Path
      d="M10.417 18.667c0-.943 0-1.415.293-1.708.292-.292.764-.292 1.707-.292h25.166c.943 0 1.415 0 1.707.292.293.293.293.765.293 1.708v4.75c0 5.656 0 8.485-1.757 10.242-1.757 1.758-4.586 1.758-10.243 1.758h-5.166c-5.657 0-8.486 0-10.243-1.758-1.757-1.757-1.757-4.585-1.757-10.242v-4.75Z"
      stroke={color}
      strokeWidth={6}
      strokeLinecap="round"
      mask="url(#a)"
    />
    <Path
      d="M23.558 24.588a1.5 1.5 0 0 0 2.884.824l-2.884-.824Zm5.34-13.228 1.442.412-1.443-.412Zm1.18-1.308.556 1.393-.557-1.393Zm-.827.44 1.114 1.006-1.114-1.005Zm-2.809 14.92 3.898-13.64-2.885-.824-3.897 13.64 2.884.824Zm4.192-13.967 9.506-3.802-1.114-2.786L29.52 8.66l1.114 2.785Zm-.294.327c.034-.12.059-.207.082-.282.022-.075.036-.115.044-.137.008-.02.005-.008-.012.023a.705.705 0 0 1-.09.122l-2.226-2.01c-.444.491-.591 1.138-.683 1.46l2.885.824Zm-.82-3.112c-.31.124-.939.337-1.382.828l2.227 2.01a.704.704 0 0 1-.113.101c-.028.02-.04.025-.021.015l.131-.059.273-.11L29.52 8.66Z"
      fill={color}
    />
  </Svg>
);

export default CocktailIcon;
