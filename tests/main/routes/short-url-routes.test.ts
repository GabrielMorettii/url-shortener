import request from "supertest";
import { type Express } from "express";

import { prisma } from "@/infra/db";
import { setupApp } from "@/main/config/app";
import { mockAccessToken, mockShortUrl } from "./mocks";

describe("ShortUrl Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = setupApp();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  afterEach(async () => {
    await prisma.$transaction([
      prisma.shortUrl.deleteMany({}),
      prisma.user.deleteMany({}),
    ]);
  });

  describe("POST /short-url", () => {
    it("Should return 201 on create short url (without auth)", async () => {
      await request(app)
        .post("/short-url")
        .send({
          url: "https://www.google.com/",
        })
        .expect(201);
    });

    it("Should return 201 on create short url (authorized)", async () => {
      const accessToken = await mockAccessToken();

      await request(app)
        .post("/short-url")
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          url: "https://www.google.com",
        })
        .expect(201);
    });
  });

  describe("GET /:shortUrl", () => {
    it("Should return 302 on get short url(redirected)", async () => {
      const shortUrlModel = await mockShortUrl();

      await request(app).get(`/${shortUrlModel.shortUrl}`).expect(302);
    });
  });
});
