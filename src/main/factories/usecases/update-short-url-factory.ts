import { DbUpdateShortUrl } from "@/data/usecases";
import { type UpdateShortUrl } from "@/domain/usecases";
import { prisma, PrismaShortUrlRepository } from "@/infra/db";

export const makeUpdateShortUrl = (): UpdateShortUrl => {
  const shortUrlRepository = new PrismaShortUrlRepository(prisma);

  return new DbUpdateShortUrl(shortUrlRepository, shortUrlRepository);
};
