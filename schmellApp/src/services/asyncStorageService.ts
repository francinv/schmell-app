import AsyncStorage from '@react-native-async-storage/async-storage';
import {showDetailType} from '../types/settings';

export const asyncStorageService = async (
  key: string,
  type: 'GET' | 'SET',
  value?: string | showDetailType[],
) => {
  switch (type) {
    case 'GET':
      const response = await AsyncStorage.getItem(key);
      if (response) {
        return JSON.parse(response);
      }
      break;
    case 'SET':
      const stringifyedValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringifyedValue);
      break;
  }
};
