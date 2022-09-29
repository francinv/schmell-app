import 'react-native-svg';
declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
    className?: string;
    xmlSpace?: string;
  }

  export interface PathProps {
    style?: any;
  }
}
