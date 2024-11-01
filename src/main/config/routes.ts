import { type Express, Router } from "express";
import setupAuthRoutes from "../routes/auth-routes";

export default (app: Express): void => {
  const router = Router();

  app.use(router);

  setupAuthRoutes(router);
};
