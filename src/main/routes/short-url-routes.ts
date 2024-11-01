import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeCreateShortUrlController } from "../factories";
import { checkAuthOptional } from "../middlewares";

export const shortUrlRouter = Router();

shortUrlRouter.post(
  "/",
  checkAuthOptional,
  adaptRoute(makeCreateShortUrlController()),
);
