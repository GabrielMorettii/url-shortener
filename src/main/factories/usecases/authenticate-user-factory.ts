import { DbAuthenticateUser } from "@/data/usecases";
import { type AuthenticateUser } from "@/domain/usecases";
import { BcryptAdapter } from "@/infra/cryptography";
import { JwtAdapter } from "@/infra/cryptography/jwt-adapter";
import { prisma, PrismaUserRepository } from "@/infra/db";
import env from "@/main/config/env";

export const makeAuthenticateUser = (): AuthenticateUser => {
  const bcryptAdapter = new BcryptAdapter();
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const userRepository = new PrismaUserRepository(prisma);

  return new DbAuthenticateUser(bcryptAdapter, jwtAdapter, userRepository);
};
