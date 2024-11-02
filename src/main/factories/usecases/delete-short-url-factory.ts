import { DbDeleteShortUrl } from "@/data/usecases";
import { type DeleteShortUrl } from "@/domain/usecases";
import { prisma, PrismaShortUrlRepository } from "@/infra/db";

export const makeDeleteShortUrl = (): DeleteShortUrl => {
  const shortUrlRepository = new PrismaShortUrlRepository(prisma);

  return new DbDeleteShortUrl(shortUrlRepository, shortUrlRepository);
};
