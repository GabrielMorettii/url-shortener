import { type Express } from "express";
import request from "supertest";

import { prisma } from "@/infra/db";
import { setupApp } from "@/main/config/app";

describe("Login Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = setupApp();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.user.deleteMany({});
  });

  describe("POST /signup", () => {
    test("Should return 200 on signup", async () => {
      await request(app)
        .post("/auth/signup")
        .send({
          name: "dev",
          email: "dev@gmail.com",
          password: "123",
        })
        .expect(201);
    });
  });

  // describe("POST /login", () => {
  //   test("Should return 200 on login", async () => {
  //     const password = await hash("123", 12);
  //     await prisma.account.create({
  //       data: {
  //         name: "Rodrigo",
  //         email: "rodrigo.manguinho@gmail.com",
  //         password,
  //       },
  //     });

  //     await request(app)
  //       .post("/api/login")
  //       .send({
  //         email: "rodrigo.manguinho@gmail.com",
  //         password: "123",
  //       })
  //       .expect(200);
  //   });

  //   test("Should return 401 on login", async () => {
  //     await request(app)
  //       .post("/api/login")
  //       .send({
  //         email: "rodrigo.manguinho@gmail.com",
  //         password: "123",
  //       })
  //       .expect(401);
  //   });
  // });
});
