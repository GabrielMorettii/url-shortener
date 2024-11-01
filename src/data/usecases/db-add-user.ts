import { type AddUserRequest, type AddUser } from "@/domain/usecases";
import { type UserModel } from "@/domain/models";
import {
  type FindUserByEmailRepository,
  type AddUserRepository,
  type Hasher,
} from "../protocols";
import { BadRequestError } from "@/presentation/errors";

export class DbAddUser implements AddUser {
  constructor(
    private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
  ) {}

  async handle(request: AddUserRequest): Promise<UserModel> {
    const userExists = await this.findUserByEmailRepository.findByEmail(
      request.email,
    );

    if (userExists) {
      throw new BadRequestError("Email is already in use");
    }

    const hashedPassword = await this.hasher.hash(request.password);

    const user = await this.addUserRepository.add({
      ...request,
      password: hashedPassword,
    });

    return user;
  }
}
