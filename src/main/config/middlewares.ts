import { type Express } from "express";

import {
  bodyParser,
  cors,
  headerSanitizer,
  hppHandler,
  rateLimiter,
  xssHandler,
} from "@/main/middlewares";

export default (app: Express): void => {
  app.use(headerSanitizer);
  app.use(hppHandler);
  app.use(bodyParser);
  app.use(xssHandler);
  app.use(cors);
  app.use(rateLimiter);
};
