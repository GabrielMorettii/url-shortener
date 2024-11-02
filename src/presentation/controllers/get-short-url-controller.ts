import { type Response } from "express";
import { type Controller, type HttpResponse } from "@/presentation/protocols";
import {
  type GetShortUrlRequest,
  type GetShortUrl,
  type UpdateShortUrl,
} from "@/domain/usecases";

export class GetShortUrlController implements Controller {
  constructor(
    private readonly getShortUrl: GetShortUrl,
    private readonly updateShortUrl: UpdateShortUrl,
  ) {}

  async handle(
    request: GetShortUrlRequest,
    response: Response,
  ): Promise<HttpResponse | void> {
    const data = await this.getShortUrl.handle(request);

    await this.updateShortUrl.handle({
      shortUrl: data.shortUrl,
      clicks: data.clicks + 1,
    });

    response.redirect(data.originalUrl);
  }
}
