export declare class AsymmetricEncryption {
    private key;
    private cryto;
    constructor(key?: string);
    encrypt: (data: any[] | any) => Promise<any>;
    decrypt: (data: any[] | any) => Promise<any>;
    getKey(): string;
    private encryptField;
    private decryptField;
}
