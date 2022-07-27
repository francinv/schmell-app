import {NativeModules} from 'react-native';
const {RNLockOrientation} = NativeModules;

export const lockPortrait = () => {
  console.log('portrait triggered');
  RNLockOrientation.lockToPortrait();
};

export const lockToLandscape = () => {
  console.log('landscape triggered');
  RNLockOrientation.lockToLandscapeLeft();
};
