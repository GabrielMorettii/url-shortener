import {
  type Validation,
  type Controller,
  type HttpResponse,
} from "@/presentation/protocols";
import { type AuthenticateUser } from "@/domain/usecases";
import { ok } from "../helpers";

export interface LoginRequest {
  email: string;
  password: string;
}

export class LoginController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly authenticateUser: AuthenticateUser,
  ) {}

  async handle(request: LoginRequest): Promise<HttpResponse> {
    this.validation.validate(request);

    const { email, password } = request;

    const data = await this.authenticateUser.handle({
      email,
      password,
    });

    return ok(data);
  }
}
