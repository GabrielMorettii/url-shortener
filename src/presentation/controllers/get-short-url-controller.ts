import { type Controller, type HttpResponse } from "@/presentation/protocols";
import { type GetShortUrlRequest, type GetShortUrl } from "@/domain/usecases";
import { ok } from "../helpers";

export class GetShortUrlController implements Controller {
  constructor(private readonly getShortUrl: GetShortUrl) {}

  async handle(request: GetShortUrlRequest): Promise<HttpResponse> {
    const data = await this.getShortUrl.handle(request);

    return ok(data);
  }
}
