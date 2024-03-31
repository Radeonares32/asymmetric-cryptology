import { AES,enc } from 'crypto-js'

export class AsymmetricEncryption {
    private key;
    constructor(key:string) {
      this.key = key;
    }
    encrypt = async (data: any[] | any): Promise<any> => {
      if (Array.isArray(data)) {
        return await Promise.all(data.map((value: any) => this.encrypt(value)));
      }
      const fieldToEncrypt = Object.keys(data);
      const encryptData: any = {};
      for (const field of fieldToEncrypt) {
        encryptData[field] = this.encryptField(data[field]);
      }
      return encryptData;
    };
    decrypt = async (data: any[] | any): Promise<any> => {
      if (Array.isArray(data)) {
        return await Promise.all(data.map((value: any) => this.decrypt(value)));
      }
      const fieldToDecrypt = Object.keys(data);
      const decryptData: any = {};
      for (const field of fieldToDecrypt) {
        decryptData[field] = this.decryptField(data[field]);
      }
      return decryptData;
    };
    private encryptField = (data: any) => {
      return AES.encrypt(data, this.key).toString();
    };
    private decryptField = (data: any) => {
      return AES.decrypt(data, this.key).toString(enc.Utf8);
    };
  }
  