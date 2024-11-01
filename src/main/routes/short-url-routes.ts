import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeCreateShortUrlController } from "../factories";
import { checkAuth } from "../middlewares";

export const shortUrlRouter = Router();

shortUrlRouter.post("/", checkAuth, adaptRoute(makeCreateShortUrlController()));
