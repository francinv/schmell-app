import React, {FC} from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

export const FaceBookIcon: FC = () => {
  return (
    <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={40} height={40} rx={20} fill="#0B84EE" />
      <Path
        d="M21.657 20.365h3.722l.585-3.804h-4.308v-2.08c0-1.58.514-2.981 1.983-2.981H26V8.18c-.415-.057-1.292-.18-2.95-.18-3.462 0-5.491 1.84-5.491 6.03v2.53H14v3.805h3.559V30.82A14.33 14.33 0 0 0 19.71 31c.662 0 1.309-.06 1.947-.148V20.365Z"
        fill="#fff"
      />
    </Svg>
  );
};

export const InstagramIcon: FC = () => {
  return (
    <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={40} height={40} rx={20} fill="url(#a)" />
      <Path
        d="M20 11.807h4.096c.964 0 1.446.241 1.808.362.482.24.843.361 1.204.723.362.361.603.723.723 1.204.12.362.241.844.362 1.808v8.192c0 .964-.241 1.446-.362 1.808-.24.482-.361.843-.723 1.204-.361.362-.723.603-1.204.723-.362.12-.844.241-1.808.362h-8.192c-.964 0-1.446-.241-1.808-.362-.482-.24-.843-.361-1.204-.723-.362-.361-.603-.723-.723-1.204-.12-.362-.241-.844-.362-1.808v-8.192c0-.964.241-1.446.362-1.808.24-.482.361-.843.723-1.204.361-.362.723-.603 1.204-.723.362-.12.844-.241 1.808-.362H20ZM20 10h-4.096c-1.085 0-1.808.241-2.41.482a5.263 5.263 0 0 0-1.807 1.205c-.603.602-.844 1.084-1.205 1.807-.241.602-.361 1.325-.482 2.41v8.192c0 1.085.241 1.808.482 2.41a5.263 5.263 0 0 0 1.205 1.807c.602.603 1.084.844 1.807 1.205.602.241 1.325.361 2.41.482h8.192c1.085 0 1.808-.241 2.41-.482a5.263 5.263 0 0 0 1.807-1.205c.603-.602.844-1.084 1.205-1.807.241-.602.361-1.325.482-2.41v-8.192c0-1.085-.241-1.808-.482-2.41a5.263 5.263 0 0 0-1.205-1.807c-.602-.603-1.084-.844-1.807-1.205-.602-.241-1.325-.361-2.41-.482H20Z"
        fill="#fff"
      />
      <Path
        d="M20 14.82A5.142 5.142 0 0 0 14.82 20c0 2.892 2.288 5.18 5.18 5.18s5.18-2.288 5.18-5.18-2.288-5.18-5.18-5.18Zm0 8.553A3.368 3.368 0 0 1 16.627 20 3.368 3.368 0 0 1 20 16.627 3.368 3.368 0 0 1 23.373 20c0 1.807-1.566 3.373-3.373 3.373ZM25.301 15.904a1.205 1.205 0 1 0 0-2.41 1.205 1.205 0 0 0 0 2.41Z"
        fill="#fff"
      />
      <Defs>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.805 .813) scale(92.3719)">
          <Stop stopColor="#F9ED32" />
          <Stop offset={0.36} stopColor="#EE2A7B" />
          <Stop offset={0.44} stopColor="#D22A8A" />
          <Stop offset={0.6} stopColor="#8B2AB2" />
          <Stop offset={0.83} stopColor="#1B2AF0" />
          <Stop offset={0.88} stopColor="#002AFF" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export const TikTokIcon: FC = () => {
  return (
    <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={40} height={40} rx={20} fill="#111" />
      <Path
        d="M29.968 15.276a5.254 5.254 0 0 1-5.253-5.253h-3.753V24.72a3.192 3.192 0 1 1-2.29-3.065v-3.649a6.774 6.774 0 1 0 5.868 6.714l.109-7.43a8.965 8.965 0 0 0 5.319 1.74v-3.754Z"
        fill="url(#a)"
      />
      <Path
        d="M28.976 14.254A5.253 5.253 0 0 1 23.723 9H19.97v14.697a3.192 3.192 0 1 1-2.29-3.065v-3.648a6.774 6.774 0 1 0 5.868 6.713l.11-7.429a8.966 8.966 0 0 0 5.319 1.739v-3.753Z"
        fill="url(#b)"
      />
      <Path
        d="M28.976 15.182a5.254 5.254 0 0 1-3.239-2.045 5.252 5.252 0 0 1-1.914-3.114h-2.861V24.72a3.195 3.195 0 0 1-5.928 1.656 3.196 3.196 0 0 1 2.645-5.744v-2.685a6.774 6.774 0 0 0-5.244 10.951 6.774 6.774 0 0 0 11.113-5.2l.11-7.43a8.966 8.966 0 0 0 5.319 1.739v-2.825Z"
        fill="url(#c)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={12.496}
          y1={29.029}
          x2={28.109}
          y2={13.416}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B5053C" />
          <Stop offset={0.233} stopColor="#C90441" />
          <Stop offset={0.737} stopColor="#F0014B" />
          <Stop offset={1} stopColor="#FF004F" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={11.272}
          y1={28.239}
          x2={27.717}
          y2={11.793}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00B2C9" />
          <Stop offset={0.283} stopColor="#00C8D4" />
          <Stop offset={0.741} stopColor="#00E6E4" />
          <Stop offset={1} stopColor="#00F1EA" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={2.058}
          y1={38.46}
          x2={38.461}
          y2={2.057}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DDE3E4" />
          <Stop offset={1} stopColor="#FCF7F7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
