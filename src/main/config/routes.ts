import { type Express, Router } from "express";
import { shortUrlRouter, authRouter } from "../routes";

export default (app: Express): void => {
  const router = Router();

  router.use(shortUrlRouter);
  router.use("/auth", authRouter);

  app.use(router);
};
