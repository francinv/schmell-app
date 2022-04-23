import EncryptedStorage from 'react-native-encrypted-storage';

export async function encryptedStorageService(
  key: string,
  value: any,
  type: string,
) {
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

        // Congrats! You've just stored your first value!
      } catch (error) {
        console.error('Something went wrong.');
        console.error(error);
      }
      break;
  }
}
