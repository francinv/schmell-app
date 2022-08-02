import AsyncStorage from '@react-native-async-storage/async-storage';

export async function asyncStorageService(
  key: string,
  value: any,
  type: string,
) {
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
}
