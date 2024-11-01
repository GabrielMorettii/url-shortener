import {
  type Validation,
  type Controller,
  type HttpResponse,
} from "@/presentation/protocols";
import {
  type CreateShortUrlRequest,
  type CreateShortUrl,
} from "@/domain/usecases";
import { created } from "../helpers";
export class CreateShortUrlController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly createShortUrl: CreateShortUrl,
  ) {}

  async handle(request: CreateShortUrlRequest): Promise<HttpResponse> {
    this.validation.validate(request);

    const data = await this.createShortUrl.handle(request);

    return created(data);
  }
}
