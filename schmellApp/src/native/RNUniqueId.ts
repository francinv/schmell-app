import {NativeModules} from 'react-native';
const {RNUniqueId} = NativeModules;

const getUniqueId = () => {
  let id = '';
  RNUniqueId.getUniqueString((result: string) => {
    id = result;
    return result;
  });
  return id;
};
export default getUniqueId;
