import { GetShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeGetShortUrl, makeUpdateShortUrl } from "../usecases";

export const makeGetShortUrlController = (): Controller => {
  const controller = new GetShortUrlController(
    makeGetShortUrl(),
    makeUpdateShortUrl(),
  );

  return controller;
};
