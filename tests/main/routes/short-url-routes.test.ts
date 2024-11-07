import request from "supertest";
import { type Express } from "express";

import { prisma } from "@/infra/db";
import { setupApp } from "@/main/config/app";
import { mockAccessToken, mockShortUrl, mockUser } from "./mocks";
import { faker } from "@faker-js/faker/.";

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
    it("Should return 201 and save the short URL in the database (without auth)", async () => {
      const originalUrl = "https://www.google.com/";

      const response = await request(app)
        .post("/short-url")
        .send({
          url: originalUrl,
        })
        .expect(201);

      const shortUrl = await prisma.shortUrl.findFirst({
        where: { originalUrl },
      });

      expect(response.body.shortUrl).not.toBeNull();
      expect(shortUrl).not.toBeNull();
      expect(shortUrl?.clicks).toBe(0);
    });

    it("Should return 201 and save the short URL in the database (authorized)", async () => {
      const accessToken = await mockAccessToken();
      const originalUrl = "https://www.google.com";

      const response = await request(app)
        .post("/short-url")
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          url: originalUrl,
        })
        .expect(201);

      const shortUrl = await prisma.shortUrl.findFirst({
        where: { originalUrl },
      });

      expect(response.body.shortUrl).not.toBeNull();
      expect(shortUrl).not.toBeNull();
      expect(shortUrl?.clicks).toBe(0);
      expect(shortUrl?.userId).not.toBeNull();
    });
  });

  describe("GET /:shortUrl", () => {
    it("Should return 302 on get short url(redirected)", async () => {
      const shortUrlModel = await mockShortUrl();

      const response = await request(app)
        .get(`/${shortUrlModel.shortUrl}`)
        .expect(302);

      expect(response.header.location).toBe(shortUrlModel?.originalUrl);
    });
  });

  describe("PUT /short-url/:shortUrl", () => {
    it("Should return 200 on update short url", async () => {
      const mockUserModel = await mockUser();
      const [shortUrlModel, accessToken] = await Promise.all([
        mockShortUrl(mockUserModel.id),
        mockAccessToken(mockUserModel.id),
      ]);

      const newUrl = faker.internet.url();

      const response = await request(app)
        .put(`/short-url/${shortUrlModel.shortUrl}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          originalUrl: newUrl,
        })
        .expect(200);

      expect(response.body.id).toBe(shortUrlModel.id);
      expect(response.body.originalUrl).toBe(newUrl);
    });
  });

  describe("DELETE /short-url/:shortUrl", () => {
    it("Should return 204 on delete short url", async () => {
      const mockUserModel = await mockUser();
      const [shortUrlModel, accessToken] = await Promise.all([
        mockShortUrl(mockUserModel.id),
        mockAccessToken(mockUserModel.id),
      ]);

      await request(app)
        .delete(`/short-url/${shortUrlModel.shortUrl}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .expect(204);
    });
  });

  describe("GET /short-url/user", () => {
    it("Should return 200 on get user short urls", async () => {
      const mockUserModel = await mockUser();
      const [shortUrlModel, accessToken] = await Promise.all([
        mockShortUrl(mockUserModel.id),
        mockAccessToken(mockUserModel.id),
      ]);

      const response = await request(app)
        .get("/short-url/user")
        .set("Authorization", `Bearer ${accessToken}`)
        .expect(200);

      const expectedResponse = [
        {
          ...shortUrlModel,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
      ];

      expect(response.body).toMatchObject(expectedResponse);
    });
  });
});
