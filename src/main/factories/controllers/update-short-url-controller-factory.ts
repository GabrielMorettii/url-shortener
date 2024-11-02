import { UpdateShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeUpdateShortUrl } from "../usecases";

export const makeUpdateShortUrlController = (): Controller => {
  const controller = new UpdateShortUrlController(makeUpdateShortUrl());

  return controller;
};
