import { type UserModel } from "../models";

export interface AddUser {
  handle: (request: AddUserRequest) => Promise<UserModel>;
}

export interface AddUserRequest {
  name: string;
  email: string;
  password: string;
}
