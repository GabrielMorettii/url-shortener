import {
  type DeleteShortUrlRequest,
  type DeleteShortUrl,
} from "@/domain/usecases";
import {
  type GetShortUrlRepository,
  type DeleteShortUrlRepository,
} from "../protocols";
import { ForbiddenError, NotFoundError } from "@/presentation/errors";

export class DbDeleteShortUrl implements DeleteShortUrl {
  constructor(
    private readonly getShortUrlRepository: GetShortUrlRepository,
    private readonly deleteShortUrlRepository: DeleteShortUrlRepository,
  ) {}

  async handle(request: DeleteShortUrlRequest): Promise<void> {
    const shortUrlModel = await this.getShortUrlRepository.get({
      shortUrl: request.shortUrl,
    });

    const isNotAUserShortUrl = shortUrlModel?.userId !== request.userId;

    if (!shortUrlModel) {
      throw new NotFoundError();
    } else if (isNotAUserShortUrl) {
      throw new ForbiddenError("This short-url doesn't belongs to you");
    }

    await this.deleteShortUrlRepository.delete(request);
  }
}
