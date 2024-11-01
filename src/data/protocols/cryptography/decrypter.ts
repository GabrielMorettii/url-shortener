export interface Decrypter {
  decrypt<T>(ciphertext: string): T;
}
