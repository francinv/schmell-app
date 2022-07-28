import {NativeModules} from 'react-native';
const {RNLockOrientation} = NativeModules;

export const lockPortrait = () => {
  RNLockOrientation.lockToPortrait();
};

export const lockToLandscape = () => {
  RNLockOrientation.lockToLandscapeLeft();
};
