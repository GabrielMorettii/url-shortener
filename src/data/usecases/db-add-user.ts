import { type AddUserRequest, type AddUser } from "@/domain/usecases";
import { type UserModel } from "@/domain/models";

export class DbAddUser implements AddUser {
  async handle(request: AddUserRequest): Promise<UserModel> {
    console.log({ request });

    return {} as UserModel;
  }
}
