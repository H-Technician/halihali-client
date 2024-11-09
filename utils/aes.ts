import CryptoJS from 'crypto-js';
const aesKey = process.env.AES_KEY || '';
export function aesEncrypt(word: string) {
    var key = CryptoJS.enc.Utf8.parse(aesKey);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}