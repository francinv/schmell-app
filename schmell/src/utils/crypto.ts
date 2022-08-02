import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

export function encrypt(text: string) {
  return Base64.stringify(Utf8.parse(text));
}

export function decrypt(text: string) {
  return Base64.parse(text).toString(Utf8);
}
