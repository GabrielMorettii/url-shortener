import { DeleteShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeDeleteShortUrl } from "../usecases";

export const makeDeleteShortUrlController = (): Controller => {
  const controller = new DeleteShortUrlController(makeDeleteShortUrl());

  return controller;
};
