import { faker } from "@faker-js/faker";
import { prisma, PrismaUserRepository } from "@/infra/db";
import { mockUser } from "@/tests/mocks/integration";

const makeSut = (): PrismaUserRepository => {
  return new PrismaUserRepository(prisma);
};

describe("PrismaUserRepository", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  describe("add()", () => {
    it("Should add a user to the database and return the user without password", async () => {
      const sut = makeSut();
      const userParams = {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      };

      const user = await sut.add(userParams);

      expect(user).toBeTruthy();
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("email", userParams.email);
      expect(user).toHaveProperty("name", userParams.name);
      expect(user).not.toHaveProperty("password");
    });
  });

  describe("findByEmail()", () => {
    it("Should find a user by email", async () => {
      const sut = makeSut();
      const userMock = await mockUser();

      const foundUser = await sut.findByEmail(userMock.email);

      expect(foundUser).toBeTruthy();
      expect(foundUser).toHaveProperty("id");
      expect(foundUser).toHaveProperty("email", userMock.email);
      expect(foundUser).toHaveProperty("name", userMock.name);
    });

    it("Should return undefined if user is not found", async () => {
      const sut = makeSut();
      const email = faker.internet.email();

      const user = await sut.findByEmail(email);

      expect(user).toBeUndefined();
    });
  });
});
