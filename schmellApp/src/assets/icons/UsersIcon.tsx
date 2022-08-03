import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

export default () => (
  <Svg width={45} height={45} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#a)">
      <Path
        d="M18.75 7.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM7.5 15c0-6.213 5.037-11.25 11.25-11.25S30 8.787 30 15s-5.037 11.25-11.25 11.25S7.5 21.213 7.5 15Zm24.053-7.955a1.875 1.875 0 0 1 2.652 0c4.393 4.393 4.393 11.517 0 15.91a1.875 1.875 0 0 1-2.652-2.652 7.5 7.5 0 0 0 0-10.606 1.875 1.875 0 0 1 0-2.652Zm1.315 24.375a1.875 1.875 0 0 1 2.274-1.364c2.49.622 4.066 2.214 4.972 4.027.878 1.755 1.136 3.712 1.136 5.292a1.875 1.875 0 0 1-3.75 0c0-1.232-.21-2.556-.74-3.615-.5-1-1.267-1.75-2.527-2.066a1.875 1.875 0 0 1-1.364-2.274Zm-20.68 2.33c-2.362 0-4.688 2.275-4.688 5.625a1.875 1.875 0 0 1-3.75 0C3.75 34.44 7.3 30 12.188 30h13.124c4.888 0 8.438 4.44 8.438 9.375a1.875 1.875 0 0 1-3.75 0c0-3.35-2.326-5.625-4.688-5.625H12.188Z"
        fill="gold"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h45v45H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
