import { type GetShortUrlRequest, type GetShortUrl } from "@/domain/usecases";
import { type GetShortUrlRepository } from "../protocols";
import { type ShortUrlModel } from "@/domain/models";
import { NotFoundError } from "@/presentation/errors";

export class DbGetShortUrl implements GetShortUrl {
  constructor(private readonly getShortUrlRepository: GetShortUrlRepository) {}

  async handle({ shortUrl }: GetShortUrlRequest): Promise<ShortUrlModel> {
    const shortUrlModel = await this.getShortUrlRepository.get({
      shortUrl,
    });

    if (!shortUrlModel) {
      throw new NotFoundError();
    }

    return shortUrlModel;
  }
}
