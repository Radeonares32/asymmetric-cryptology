"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricEncryption = void 0;
const crypto_js_1 = require("crypto-js");
const crypto_1 = require("./crypto");
class AsymmetricEncryption {
    constructor(key) {
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cryto", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new crypto_1.Crypto()
        });
        Object.defineProperty(this, "encrypt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (data) => __awaiter(this, void 0, void 0, function* () {
                if (Array.isArray(data)) {
                    return yield Promise.all(data.map((value) => this.encrypt(value)));
                }
                const fieldToEncrypt = Object.keys(data);
                const encryptData = {};
                for (const field of fieldToEncrypt) {
                    console.log(data[field]);
                    encryptData[field] = this.encryptField(data[field]);
                }
                return encryptData;
            })
        });
        Object.defineProperty(this, "decrypt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (data) => __awaiter(this, void 0, void 0, function* () {
                if (Array.isArray(data)) {
                    return yield Promise.all(data.map((value) => this.decrypt(value)));
                }
                const fieldToDecrypt = Object.keys(data);
                const decryptData = {};
                for (const field of fieldToDecrypt) {
                    decryptData[field] = this.decryptField(data[field]);
                }
                return decryptData;
            })
        });
        Object.defineProperty(this, "encryptField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (data) => {
                console.log(data);
                return crypto_js_1.AES.encrypt(data.toString(), this.key).toString();
            }
        });
        Object.defineProperty(this, "decryptField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (data) => {
                return crypto_js_1.AES.decrypt(data.toString(), this.key).toString(crypto_js_1.enc.Utf8);
            }
        });
        if (key) {
            this.key = key;
        }
        else {
            this.key = this.cryto.generateKey();
        }
    }
    getKey() {
        return this.key;
    }
}
exports.AsymmetricEncryption = AsymmetricEncryption;
