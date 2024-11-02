import {
  type UpdateShortUrlRequest,
  type UpdateShortUrl,
} from "@/domain/usecases";
import {
  type GetShortUrlRepository,
  type UpdateShortUrlRepository,
} from "../protocols";
import { type ShortUrlModel } from "@/domain/models";
import { ForbiddenError, NotFoundError } from "@/presentation/errors";

export class DbUpdateShortUrl implements UpdateShortUrl {
  constructor(
    private readonly getShortUrlRepository: GetShortUrlRepository,
    private readonly updateShortUrlRepository: UpdateShortUrlRepository,
  ) {}

  async handle(request: UpdateShortUrlRequest): Promise<ShortUrlModel> {
    const shortUrlModel = await this.getShortUrlRepository.get({
      shortUrl: request.shortUrl,
    });

    const isNotAUserShortUrl =
      request.originalUrl && shortUrlModel?.userId !== request.userId;

    if (!shortUrlModel) {
      throw new NotFoundError();
    } else if (isNotAUserShortUrl) {
      throw new ForbiddenError("This short-url doesn't belongs to you");
    }

    const data = await this.updateShortUrlRepository.update(request);

    return data;
  }
}
