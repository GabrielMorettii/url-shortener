import { type Middleware, type HttpResponse } from "@/presentation/protocols";
import { ok, unauthorized } from "@/presentation/helpers";
import { UnauthorizedError } from "@/presentation/errors";
import { type Decrypter } from "@/data/protocols";

export interface AuthMiddlewareRequest {
  accessToken?: string;
}

export interface JwtPayload {
  id: string;
}

export class AuthMiddleware implements Middleware {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly tokenIsRequired: boolean = true,
  ) {}

  handle(request: AuthMiddlewareRequest): HttpResponse {
    const defaultResponse = this.tokenIsRequired
      ? unauthorized(new UnauthorizedError())
      : ok({});

    try {
      const { accessToken: bearerToken } = request;
      const [, token] = bearerToken?.split(" ") ?? [];

      if (!bearerToken || !token) {
        return defaultResponse;
      }

      const payload = this.decrypter.decrypt<JwtPayload>(token);

      return ok({
        user: payload,
      });
    } catch {
      return defaultResponse;
    }
  }
}
