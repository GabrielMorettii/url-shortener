import { GetShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeGetShortUrl } from "../usecases";

export const makeGetAllUserShortUrlController = (): Controller => {
  const controller = new GetShortUrlController(makeGetShortUrl());

  return controller;
};
