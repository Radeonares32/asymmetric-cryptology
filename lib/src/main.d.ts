export declare class AsymmetricEncryption {
    private key;
    constructor(key: string);
    encrypt: (data: any[] | any) => Promise<any>;
    decrypt: (data: any[] | any) => Promise<any>;
    private encryptField;
    private decryptField;
}
