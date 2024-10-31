import { type Controller, type HttpResponse } from "@/presentation/protocols";

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
export class SignUpController implements Controller {
  async handle(request: SignUpRequest): Promise<HttpResponse> {
    return {
      body: request,
      statusCode: 200,
    };
  }
}
