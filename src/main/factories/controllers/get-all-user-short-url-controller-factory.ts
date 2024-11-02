import { GetAllUserShortUrlController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeGetAllUserShortUrl } from "../usecases";

export const makeGetAllUserShortUrlController = (): Controller => {
  const controller = new GetAllUserShortUrlController(makeGetAllUserShortUrl());

  return controller;
};
