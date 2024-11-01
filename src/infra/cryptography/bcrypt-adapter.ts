import bcrypt from "bcrypt";

import { type HashComparer, type Hasher } from "@/data/protocols";

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number = 12) {}

  async hash(plaintext: string): Promise<string> {
    return await bcrypt.hash(plaintext, this.salt);
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return await bcrypt.compare(plaintext, digest);
  }
}
