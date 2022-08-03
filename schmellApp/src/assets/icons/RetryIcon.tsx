import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RetryIcon = () => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m16.333 28.333-1.06-1.06-1.061 1.06 1.06 1.061 1.061-1.06Zm5.606-7.727-6.666 6.667 2.121 2.121 6.667-6.667-2.122-2.121Zm-6.666 8.788 6.666 6.667 2.122-2.122-6.667-6.666-2.121 2.121Z"
      fill="black"
    />
    <Path
      d="M9.563 22.5a11.667 11.667 0 1 1 10.104 5.833"
      stroke="black"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export default RetryIcon;
