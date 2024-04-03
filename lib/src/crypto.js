"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypto = void 0;
class Crypto {
    constructor() {
        Object.defineProperty(this, "generatePrimeNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (min, max) => {
                const isPrime = (num) => {
                    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
                        if (num % i === 0)
                            return false;
                    }
                    return num > 1;
                };
                let prime = Math.floor(Math.random() * (max - min + 1)) + min;
                while (!isPrime(prime)) {
                    prime = Math.floor(Math.random() * (max - min + 1)) + min;
                }
                return prime;
            }
        });
        Object.defineProperty(this, "generateKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const getRandomPrime = (min, max) => {
                    let prime = Math.floor(Math.random() * (max - min + 1)) + min;
                    while (!isPrime(prime)) {
                        prime = Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    return prime;
                };
                const isPrime = (num) => {
                    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
                        if (num % i === 0)
                            return false;
                    }
                    return num > 1;
                };
                let key = "";
                while (key.length < 32) {
                    const prime1 = this.generatePrimeNumber(10000, 100000);
                    const prime2 = this.generatePrimeNumber(10000, 100000);
                    const product = prime1 * prime2;
                    key += product.toString(16);
                }
                return key.substring(0, 32);
            }
        });
    }
}
exports.Crypto = Crypto;
