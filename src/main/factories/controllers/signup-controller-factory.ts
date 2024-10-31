import { SignUpController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController();

  return controller;
};
