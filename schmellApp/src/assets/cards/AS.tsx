import React from 'react';
import Svg, {Defs, Symbol, Path, Rect, Use, G} from 'react-native-svg';

const ZEROS = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="prefix__card"
    height={336 / 2}
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width={240 / 2}>
    <Defs>
      <Symbol
        id="prefix__b"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
          stroke="black"
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
          d="M0-500c100 250 355 400 355 685a150 150 0 0 1-300 0 10 10 0 0 0-20 0c0 200 50 215 95 315h-260c45-100 95-115 95-315a10 10 0 0 0-20 0 150 150 0 0 1-300 0c0-285 255-435 355-685Z"
          fill="black"
        />
      </Symbol>
    </Defs>
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
    <Use xlinkHref="#prefix__a" height={70} width={70} x={-35} y={-35} />
    <Use xlinkHref="#prefix__b" height={32} width={32} x={-114.4} y={-156} />
    <Use
      xlinkHref="#prefix__a"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
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
    </G>
  </Svg>
);

export default ZEROS;
