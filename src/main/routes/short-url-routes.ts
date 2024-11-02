import { Router } from "express";
import { adaptRoute } from "../adapters";
import {
  makeCreateShortUrlController,
  makeDeleteShortUrlController,
  makeGetAllUserShortUrlController,
  makeGetShortUrlController,
  makeUpdateShortUrlController,
} from "../factories";
import { checkAuthOptional, checkAuthRequired } from "../middlewares";

export const shortUrlRouter = Router();

shortUrlRouter.get("/:shortUrl", adaptRoute(makeGetShortUrlController()));

shortUrlRouter.post(
  "/short-url",
  checkAuthOptional,
  adaptRoute(makeCreateShortUrlController()),
);

shortUrlRouter
  .route("/short-url/:shortUrl")
  .put(checkAuthRequired, adaptRoute(makeUpdateShortUrlController()))
  .delete(checkAuthRequired, adaptRoute(makeDeleteShortUrlController()));

shortUrlRouter.get(
  "/short-url/user",
  checkAuthRequired,
  adaptRoute(makeGetAllUserShortUrlController()),
);
