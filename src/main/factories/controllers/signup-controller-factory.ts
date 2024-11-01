import { SignUpController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeAddUser } from "../usecases";
import { makeSignUpValidation } from "../validation";

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(
    makeSignUpValidation(),
    makeAddUser(),
  );

  return controller;
};
