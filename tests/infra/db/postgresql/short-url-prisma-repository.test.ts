import { faker } from "@faker-js/faker";
import { prisma, PrismaShortUrlRepository } from "@/infra/db";
import { mockShortUrl, mockUser } from "@/tests/mocks/integration";

const makeSut = (): PrismaShortUrlRepository => {
  return new PrismaShortUrlRepository(prisma);
};

describe("PrismaShortUrlRepository", () => {
  beforeEach(async () => {
    await prisma.shortUrl.deleteMany();
  });

  describe("create()", () => {
    it("Should create a short URL and return it", async () => {
      const sut = makeSut();
      const shortUrlParams = {
        originalUrl: faker.internet.url(),
        shortUrl: faker.string.alphanumeric(6),
        clicks: 0,
      };

      const shortUrlModel = await sut.create(shortUrlParams);

      expect(shortUrlModel).toBeTruthy();
      expect(shortUrlModel).toHaveProperty("id");
      expect(shortUrlModel).toHaveProperty("shortUrl", shortUrlParams.shortUrl);
      expect(shortUrlModel).toHaveProperty("createdAt");
      expect(shortUrlModel).toHaveProperty("updatedAt");
    });
  });

  describe("get()", () => {
    it("Should retrieve a short URL by its short code", async () => {
      const sut = makeSut();
      const mockUrl = await mockShortUrl();

      const retrievedUrl = await sut.get({ shortUrl: mockUrl.shortUrl });

      expect(retrievedUrl).toBeTruthy();
      expect(retrievedUrl?.shortUrl).toBe(mockUrl.shortUrl);
    });

    it("Should return null if short URL does not exist", async () => {
      const sut = makeSut();
      const result = await sut.get({ shortUrl: faker.string.alphanumeric(6) });

      expect(result).toBeNull();
    });
  });

  describe("getAllByUser()", () => {
    it("Should return all short URLs for a user", async () => {
      const sut = makeSut();

      const userMock = await mockUser();
      const userId = userMock.id!;

      await Promise.all([
        await mockShortUrl(userId),
        await mockShortUrl(userId),
      ]);

      const shortUrls = await sut.getAllByUser({ userId });

      expect(shortUrls.length).toBeGreaterThan(0);
      expect(shortUrls.every((url) => url.userId === userId)).toBe(true);
    });
  });

  describe("update()", () => {
    it("Should update an existing short URL", async () => {
      const sut = makeSut();
      const originalUrl = await mockShortUrl();
      const newData = { originalUrl: faker.internet.url() };

      const updatedUrl = await sut.update({
        shortUrl: originalUrl.shortUrl,
        ...newData,
      });

      expect(updatedUrl.originalUrl).toBe(newData.originalUrl);
    });
  });

  describe("delete()", () => {
    it("Should soft delete a short URL", async () => {
      const sut = makeSut();

      const userMock = await mockUser();
      const urlToDelete = await mockShortUrl(userMock.id);

      await sut.delete({
        shortUrl: urlToDelete.shortUrl,
        userId: urlToDelete.userId!,
      });

      const deletedUrl = await prisma.shortUrl.findUnique({
        where: { shortUrl: urlToDelete.shortUrl },
      });

      expect(deletedUrl).toBeTruthy();
      expect(deletedUrl?.deletedAt).not.toBeNull();
    });
  });
});
