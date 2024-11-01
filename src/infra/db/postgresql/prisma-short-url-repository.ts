import { type PrismaClient } from "@prisma/client";
import {
  type CreateShortUrlParams,
  type CreateShortUrlRepository,
} from "@/data/protocols/db";
import { type ShortUrlModel } from "@/domain/models";

export class PrismaShortUrlRepository implements CreateShortUrlRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: CreateShortUrlParams): Promise<ShortUrlModel> {
    const shortUrlCreated = await this.prisma.shortUrl.create({
      data,
    });

    return shortUrlCreated as ShortUrlModel;
  }
}
