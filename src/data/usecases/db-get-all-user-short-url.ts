import {
  type GetAllUserShortUrl,
  type GetAllUserShortUrlRequest,
} from "@/domain/usecases";
import { type GetShortUrlRepository } from "../protocols";
import { type ShortUrlModel } from "@/domain/models";

export class DbGetAllUserShortUrl implements GetAllUserShortUrl {
  constructor(private readonly getShortUrlRepository: GetShortUrlRepository) {}

  async handle({
    userId,
  }: GetAllUserShortUrlRequest): Promise<ShortUrlModel[]> {
    const shortUrlModels = await this.getShortUrlRepository.getAllByUser({
      userId,
    });

    return shortUrlModels;
  }
}
