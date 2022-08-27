import AsyncStorage from '@react-native-async-storage/async-storage';
import {showDetailType} from '../typings/settingsTypes';

export const asyncStorageService = async (
  key: string,
  type: 'GET' | 'SET',
  value?: string | showDetailType[],
) => {
  switch (type) {
    case 'GET':
      const temp_get = await AsyncStorage.getItem(key);
      if (temp_get) {
        return JSON.parse(temp_get);
      }
      break;
    case 'SET':
      const temp_set = JSON.stringify(value);
      await AsyncStorage.setItem(key, temp_set);
      break;
  }
};
