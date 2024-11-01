import {
  type AuthenticateUserRequest,
  type AuthenticateUserResponse,
  type AuthenticateUser,
} from "@/domain/usecases";
import {
  type FindUserByEmailRepository,
  type Encrypter,
  type HashComparer,
} from "../protocols";
import { UnauthorizedError } from "@/presentation/errors";

export class DbAuthenticateUser implements AuthenticateUser {
  constructor(
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
  ) {}

  async handle({
    email,
    password,
  }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const user = await this.findUserByEmailRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedError();
    }

    const isPasswordCorrect = await this.hashComparer.compare(
      password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new UnauthorizedError();
    }

    const accessToken = await this.encrypter.encrypt(user.id!);

    return {
      token: accessToken,
    };
  }
}
