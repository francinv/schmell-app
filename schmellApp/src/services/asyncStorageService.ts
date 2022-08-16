import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorageService = async (
  key: string,
  value: any,
  type: 'GET' | 'SET',
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
