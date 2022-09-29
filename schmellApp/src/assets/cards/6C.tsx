import React from 'react';
import Svg, {Symbol, Path, Rect, Use, G} from 'react-native-svg';

const SIXC = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={240}
    height={336}
    viewBox="-120 -168 240 336"
    preserveAspectRatio="none"
    className="prefix__card">
    <Symbol
      id="prefix__b"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid">
      <Path
        d="M-250 100a250 250 0 0 1 500 0v110a250 250 0 0 1-500 0v-420A250 250 0 0 1 0-460c150 0 180 60 200 85"
        stroke="#000"
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
      <Path d="M30 150c5 235 55 250 100 350h-260c45-100 95-115 100-350a10 10 0 0 0-20 0 210 210 0 1 1-74-201 10 10 0 0 0 14-14 230 230 0 1 1 220 0 10 10 0 0 0 14 14 210 210 0 1 1-74 201 10 10 0 0 0-20 0Z" />
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
      y={-135.588}
    />
    <Use
      xlinkHref="#prefix__a"
      height={70}
      width={70}
      x={17.501}
      y={-135.588}
    />
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
        y={-135.588}
      />
      <Use
        xlinkHref="#prefix__a"
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
    </G>
  </Svg>
);

export default SIXC;
