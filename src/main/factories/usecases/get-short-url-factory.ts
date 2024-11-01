import { DbGetShortUrl } from "@/data/usecases";
import { type GetShortUrl } from "@/domain/usecases";
import { prisma, PrismaShortUrlRepository } from "@/infra/db";

export const makeGetShortUrl = (): GetShortUrl => {
  const shortUrlRepository = new PrismaShortUrlRepository(prisma);

  return new DbGetShortUrl(shortUrlRepository);
};
