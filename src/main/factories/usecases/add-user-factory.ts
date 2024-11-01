import { DbAddUser } from "@/data/usecases";
import { type AddUser } from "@/domain/usecases";
import { BcryptAdapter } from "@/infra/cryptography";
import { prisma, PrismaUserRepository } from "@/infra/db";

export const makeAddUser = (): AddUser => {
  const bcryptAdapter = new BcryptAdapter();
  const userRepository = new PrismaUserRepository(prisma);

  return new DbAddUser(bcryptAdapter, userRepository, userRepository);
};
