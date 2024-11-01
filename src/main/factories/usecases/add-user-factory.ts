import { DbAddUser } from "@/data/usecases";
import { type AddUser } from "@/domain/usecases";
import { BcryptAdapter } from "@/infra/cryptography";
import { prisma, PrismaUserRepository } from "@/infra/db";

export const makeAddUser = (): AddUser => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const userRepository = new PrismaUserRepository(prisma);

  return new DbAddUser(bcryptAdapter, userRepository, userRepository);
};
