import React from 'react';
import Svg, {Symbol, Path, Rect, Use, G} from 'react-native-svg';

const EIGHTH = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={240 / 2}
    height={336 / 2}
    viewBox="-120 -168 240 336"
    preserveAspectRatio="none"
    className="prefix__card">
    <Symbol
      id="prefix__b"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid">
      <Path
        d="M-1-50a205 205 0 1 1 2 0h-2a255 255 0 1 0 2 0Z"
        stroke="red"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
      />
    </Symbol>
    <Symbol
      id="prefix__a"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid">
      <Path
        d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300Z"
        fill="red"
      />
    </Symbol>
    <Rect
      width={239}
      height={335}
      x={-119.5}
      y={-167.5}
      rx={12}
      ry={12}
      fill="#fff"
      stroke="#000"
    />
    <Use xlinkHref="#prefix__a" height={70} width={70} x={-87.501} y={-35} />
    <Use xlinkHref="#prefix__a" height={70} width={70} x={17.501} y={-35} />
    <Use xlinkHref="#prefix__b" height={32} width={32} x={-114.4} y={-156} />
    <Use
      xlinkHref="#prefix__a"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <Use
      xlinkHref="#prefix__a"
      height={70}
      width={70}
      x={-87.501}
      y={-135.501}
    />
    <Use
      xlinkHref="#prefix__a"
      height={70}
      width={70}
      x={17.501}
      y={-135.501}
    />
    <Use xlinkHref="#prefix__a" height={70} width={70} x={-35} y={-85.25} />
    <G transform="rotate(180)">
      <Use xlinkHref="#prefix__b" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref="#prefix__a"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref="#prefix__a"
        height={70}
        width={70}
        x={-87.501}
        y={-135.501}
      />
      <Use
        xlinkHref="#prefix__a"
        height={70}
        width={70}
        x={17.501}
        y={-135.501}
      />
      <Use xlinkHref="#prefix__a" height={70} width={70} x={-35} y={-85.25} />
    </G>
  </Svg>
);

export default EIGHTH;
