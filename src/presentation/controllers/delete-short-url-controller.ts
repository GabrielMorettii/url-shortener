import { type Controller, type HttpResponse } from "@/presentation/protocols";
import {
  type DeleteShortUrlRequest,
  type DeleteShortUrl,
} from "@/domain/usecases";
import { noContent } from "../helpers";

export class DeleteShortUrlController implements Controller {
  constructor(private readonly deleteShortUrl: DeleteShortUrl) {}

  async handle(request: DeleteShortUrlRequest): Promise<HttpResponse> {
    await this.deleteShortUrl.handle(request);

    return noContent();
  }
}
