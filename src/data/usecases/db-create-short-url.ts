import env from "@/main/config/env";
import {
  type CreateShortUrlRequest,
  type CreateShortUrlResponse,
  type CreateShortUrl,
} from "@/domain/usecases";
import { type CreateShortUrlRepository } from "../protocols";

export class DbCreateShortUrl implements CreateShortUrl {
  constructor(
    private readonly createShortUrlRepository: CreateShortUrlRepository,
  ) {}

  async handle({
    url,
    userId,
  }: CreateShortUrlRequest): Promise<CreateShortUrlResponse> {
    const sixRamdomCharacters = this.generateRandomString();

    const shortUrl = `${env.baseUrl}/${sixRamdomCharacters}`;

    await this.createShortUrlRepository.create({
      originalUrl: url,
      shortUrl,
      clicks: 0,
      userId,
    });

    return { shortUrl };
  }

  private generateRandomString(length: number = 6): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }
}
