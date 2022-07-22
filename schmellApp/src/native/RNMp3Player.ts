import {NativeModules} from 'react-native';
const {RNMp3Player} = NativeModules;

const playMp3 = () => {
  console.log('playMp3 triggered');
  const URL = 'FIX';
  RNMp3Player.playSound(URL);
};
export default playMp3;
