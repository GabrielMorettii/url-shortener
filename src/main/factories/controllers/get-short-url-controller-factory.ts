import { GetShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeGetShortUrl } from "../usecases";

export const makeGetShortUrlController = (): Controller => {
  const controller = new GetShortUrlController(makeGetShortUrl());

  return controller;
};
