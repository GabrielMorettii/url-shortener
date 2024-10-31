import { SignUpController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeAddUser } from "../usecases";

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeAddUser());

  return controller;
};
