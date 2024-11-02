import { type Controller, type HttpResponse } from "@/presentation/protocols";
import {
  type UpdateShortUrlRequest,
  type UpdateShortUrl,
} from "@/domain/usecases";
import { ok } from "../helpers";

export class UpdateShortUrlController implements Controller {
  constructor(private readonly updateShortUrl: UpdateShortUrl) {}

  async handle(request: UpdateShortUrlRequest): Promise<HttpResponse> {
    const data = await this.updateShortUrl.handle(request);

    return ok(data);
  }
}
