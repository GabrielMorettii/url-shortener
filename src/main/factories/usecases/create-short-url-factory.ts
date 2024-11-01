import { DbCreateShortUrl } from "@/data/usecases";
import { type CreateShortUrl } from "@/domain/usecases";
import { prisma, PrismaShortUrlRepository } from "@/infra/db";

export const makeCreateShortUrl = (): CreateShortUrl => {
  const shortUrlRepository = new PrismaShortUrlRepository(prisma);
  return new DbCreateShortUrl(shortUrlRepository);
};
