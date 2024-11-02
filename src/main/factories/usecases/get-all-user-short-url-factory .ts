import { DbGetAllUserShortUrl } from "@/data/usecases/db-get-all-user-short-url";
import { type GetAllUserShortUrl } from "@/domain/usecases";
import { prisma, PrismaShortUrlRepository } from "@/infra/db";

export const makeGetAllUserShortUrl = (): GetAllUserShortUrl => {
  const shortUrlRepository = new PrismaShortUrlRepository(prisma);

  return new DbGetAllUserShortUrl(shortUrlRepository);
};
