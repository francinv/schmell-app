import React from 'react';
import Svg, {Symbol, Path, Rect, Use, G} from 'react-native-svg';

const TWOD = () => (
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
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid">
      <Path
        d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0Z"
        fill="red"
      />
    </Symbol>
    <Symbol
      id="prefix__a"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid">
      <Path
        d="M-225-225c-20-40 25-235 225-235s225 135 225 235c0 200-450 385-450 685h450V300"
        stroke="red"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
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
    <Use xlinkHref="#prefix__a" height={32} width={32} x={-114.4} y={-156} />
    <Use
      xlinkHref="#prefix__b"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <Use xlinkHref="#prefix__b" height={70} width={70} x={-35} y={-135.501} />
    <G transform="rotate(180)">
      <Use xlinkHref="#prefix__a" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref="#prefix__b"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use xlinkHref="#prefix__b" height={70} width={70} x={-35} y={-135.501} />
    </G>
  </Svg>
);

export default TWOD;
