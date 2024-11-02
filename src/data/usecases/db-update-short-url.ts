import {
  type UpdateShortUrlRequest,
  type UpdateShortUrl,
} from "@/domain/usecases";
import { type UpdateShortUrlRepository } from "../protocols";

export class DbUpdateShortUrl implements UpdateShortUrl {
  constructor(
    private readonly updateShortUrlRepository: UpdateShortUrlRepository,
  ) {}

  async handle(request: UpdateShortUrlRequest): Promise<void> {
    await this.updateShortUrlRepository.update(request);
  }
}
