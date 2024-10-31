import {
  // type Validation,
  type Controller,
  type HttpResponse,
} from "@/presentation/protocols";
import { type AddUser } from "@/domain/usecases";
import { created } from "../helpers";

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export class SignUpController implements Controller {
  constructor(
    // private readonly validation: Validation,
    private readonly addUser: AddUser,
  ) {}

  async handle(request: SignUpRequest): Promise<HttpResponse> {
    // this.validation.validate(request);

    const { name, email, password } = request;

    const user = await this.addUser.handle({
      name,
      email,
      password,
    });

    return created(user);
  }
}
