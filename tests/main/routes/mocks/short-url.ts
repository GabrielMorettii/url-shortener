import { faker } from "@faker-js/faker";

import { type ShortUrlModel } from "@/domain/models";
import { prisma } from "@/infra/db";

export const mockShortUrl = async (userId?: string): Promise<ShortUrlModel> => {
  return (await prisma.shortUrl.create({
    data: {
      originalUrl: faker.internet.url(),
      shortUrl: faker.string.alphanumeric({ length: 5 }),
      clicks: 0,
      userId: userId ?? undefined,
    },
  })) as ShortUrlModel;
};
