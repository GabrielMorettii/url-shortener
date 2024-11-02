import { type PrismaClient } from "@prisma/client";
import {
  type GetShortUrlRepository,
  type CreateShortUrlParams,
  type CreateShortUrlRepository,
  type UpdateShortUrlRepository,
  type DeleteShortUrlRepository,
} from "@/data/protocols/db";
import { type ShortUrlModel } from "@/domain/models";
import {
  type UpdateShortUrlRequest,
  type GetShortUrlRequest,
  type GetAllUserShortUrlRequest,
  type DeleteShortUrlRequest,
} from "@/domain/usecases";

export class PrismaShortUrlRepository
  implements
    CreateShortUrlRepository,
    GetShortUrlRepository,
    UpdateShortUrlRepository,
    DeleteShortUrlRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: CreateShortUrlParams): Promise<ShortUrlModel> {
    const shortUrlCreated = await this.prisma.shortUrl.create({
      data,
    });

    return shortUrlCreated as ShortUrlModel;
  }

  async get(data: GetShortUrlRequest): Promise<ShortUrlModel | undefined> {
    const shortUrl = await this.prisma.shortUrl.findUnique({
      where: {
        shortUrl: data.shortUrl,
        deletedAt: null,
      },
    });

    return shortUrl as ShortUrlModel;
  }

  async getAllByUser(
    data: GetAllUserShortUrlRequest,
  ): Promise<ShortUrlModel[]> {
    const shortUrls = await this.prisma.shortUrl.findMany({
      where: {
        userId: data.userId,
        deletedAt: null,
      },
    });

    return shortUrls as ShortUrlModel[];
  }

  async update({ id, ...rest }: UpdateShortUrlRequest): Promise<void> {
    await this.prisma.shortUrl.update({
      where: { id },
      data: rest,
    });
  }

  async delete({ shortUrl, userId }: DeleteShortUrlRequest): Promise<void> {
    await this.prisma.shortUrl.update({
      where: { userId, shortUrl },
      data: { deletedAt: new Date() },
    });
  }
}
