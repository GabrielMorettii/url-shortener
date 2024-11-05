import { type Express } from "express";

import {
  bodyParser,
  cors,
  headerSanitizer,
  hppHandler,
  rateLimiter,
} from "@/main/middlewares";

export default (app: Express): void => {
  app.use(headerSanitizer);
  app.use(hppHandler);
  app.use(bodyParser);
  app.use(cors);
  app.use(rateLimiter);
};
