import request from "supertest";
import { type Express } from "express";

import { prisma } from "@/infra/db";
import { setupApp } from "@/main/config/app";
import { BcryptAdapter } from "@/infra/cryptography";

describe("Auth Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = setupApp();
  });

  afterEach(async () => {
    await prisma.user.deleteMany({});
  });

  describe("POST /signup", () => {
    it("Should return 201 on signup", async () => {
      const response = await request(app)
        .post("/auth/signup")
        .send({
          name: "dev",
          email: "dev@gmail.com",
          password: "123",
        })
        .expect(201);

      const user = await prisma.user.findUnique({
        where: { email: "dev@gmail.com" },
      });

      expect(response.body.id).toEqual(user?.id);
    });
  });

  describe("POST /login", () => {
    it("Should return 200 on login", async () => {
      const bcrypt = new BcryptAdapter();

      const userPassword = "any";
      const hashedPassword = await bcrypt.hash(userPassword);

      await prisma.user.create({
        data: {
          name: "dev",
          email: "dev@gmail.com",
          password: hashedPassword,
        },
      });

      const response = await request(app)
        .post("/auth/login")
        .send({
          email: "dev@gmail.com",
          password: userPassword,
        })
        .expect(200);

      expect(response.body.token).not.toBeNull();
    });
  });
});
