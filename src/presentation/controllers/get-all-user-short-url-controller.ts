import { type Controller, type HttpResponse } from "@/presentation/protocols";
import {
  type GetAllUserShortUrlRequest,
  type GetAllUserShortUrl,
} from "@/domain/usecases";
import { ok } from "../helpers";

export class GetAllUserShortUrlController implements Controller {
  constructor(private readonly getAllUserShortUrl: GetAllUserShortUrl) {}

  async handle(request: GetAllUserShortUrlRequest): Promise<HttpResponse> {
    const data = await this.getAllUserShortUrl.handle(request);

    return ok(data);
  }
}
