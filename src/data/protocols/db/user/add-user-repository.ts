import { type UserModel } from "@/domain/models";
import { type AddUserRequest } from "@/domain/usecases";

export interface AddUserRepository {
  add(data: AddUserRequest): Promise<UserModel>;
}
