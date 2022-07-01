import {NativeModules} from 'react-native';
const {RNMp3Player} = NativeModules;

const playMp3 = () => {
  console.log('playMp3 triggered');
  const newLocal =
    'https://schmell-files.s3.eu-north-1.amazonaws.com/readout-files/Stubben.m4a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYQSVEZSAZBKG3XGJ%2F20220629%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20220629T234020Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c6dcfc32e2726158854ad0b775464e7cc92bbd65f7968ea361aa116f72e608cc';
  RNMp3Player.playSound(newLocal);
};
export default playMp3;
