import { randomUUID } from "crypto";
import { faker } from "@faker-js/faker";

import { type UserModel } from "@/domain/models";
import { type AddUser, type AddUserRequest } from "@/domain/usecases";

export class AddUserSpy implements AddUser {
  params!: AddUserRequest;
  result!: UserModel;

  async handle(params: AddUserRequest): Promise<UserModel> {
    this.params = params;

    this.result = {
      id: randomUUID(),
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    return this.result;
  }
}
