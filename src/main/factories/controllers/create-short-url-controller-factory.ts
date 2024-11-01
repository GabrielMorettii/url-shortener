import { CreateShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeCreateShortUrlValidation } from "../validation";
import { makeCreateShortUrl } from "../usecases";

export const makeCreateShortUrlController = (): Controller => {
  const controller = new CreateShortUrlController(
    makeCreateShortUrlValidation(),
    makeCreateShortUrl(),
  );

  return controller;
};
