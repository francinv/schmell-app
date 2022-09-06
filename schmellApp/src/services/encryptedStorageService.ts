import EncryptedStorage from 'react-native-encrypted-storage';

export default async (key: string, type: 'GET' | 'SET', value?: string) => {
  switch (type) {
    case 'GET':
      try {
        const session = await EncryptedStorage.getItem(key);
        if (session !== undefined) {
          return JSON.parse(session!);
        }
      } catch (error) {
        console.error('Something went wrong.');
        console.error(error);
      }
      break;
    case 'SET':
      try {
        await EncryptedStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Something went wrong.');
        console.error(error);
      }
      break;
  }
};
