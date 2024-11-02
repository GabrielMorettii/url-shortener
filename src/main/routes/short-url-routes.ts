import { Router } from "express";
import { adaptRoute } from "../adapters";
import {
  makeCreateShortUrlController,
  makeDeleteShortUrlController,
  makeGetAllUserShortUrlController,
  makeGetShortUrlController,
} from "../factories";
import { checkAuthOptional, checkAuthRequired } from "../middlewares";

export const shortUrlRouter = Router();

shortUrlRouter.get("/:shortUrl", adaptRoute(makeGetShortUrlController()));

shortUrlRouter.post(
  "/short-url",
  checkAuthOptional,
  adaptRoute(makeCreateShortUrlController()),
);

shortUrlRouter.use(checkAuthRequired);

shortUrlRouter.delete(
  "/short-url/:shortUrl",
  adaptRoute(makeDeleteShortUrlController()),
);

shortUrlRouter.get(
  "/short-url/user",
  adaptRoute(makeGetAllUserShortUrlController()),
);
