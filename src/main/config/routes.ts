import { type Express, Router } from "express";
import { shortUrlRouter, authRouter } from "../routes";

export default (app: Express): void => {
  const router = Router();

  router.use("/auth", authRouter);
  router.use("/short-url", shortUrlRouter);

  app.use(router);
};
