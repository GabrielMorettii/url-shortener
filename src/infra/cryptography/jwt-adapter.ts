import jwt from "jsonwebtoken";

import { type Encrypter, type Decrypter } from "@/data/protocols";
import env from "@/main/config/env";

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(private readonly secret: string) {}

  async encrypt(plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret, {
      expiresIn: env.jwtExpiresIn,
    });
  }

  decrypt<T>(ciphertext: string): T {
    return jwt.verify(ciphertext, this.secret) as T;
  }
}
