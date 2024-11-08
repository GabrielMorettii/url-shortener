import { faker } from "@faker-js/faker";

import { type UserModel } from "@/domain/models";
import { prisma } from "@/infra/db";

export const mockUser = async (): Promise<UserModel> => {
  return await prisma.user.create({
    data: {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });
};
