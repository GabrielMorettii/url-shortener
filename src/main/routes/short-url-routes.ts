import { Router } from "express";
import { adaptRoute } from "../adapters";
import {
  makeCreateShortUrlController,
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

shortUrlRouter.get(
  "/short-url/user/:userId",
  checkAuthRequired,
  adaptRoute(makeCreateShortUrlController()),
);
