import express, { type Express } from "express";
import setupMiddlewares from "@/main/config/middlewares";
import setupRoutes from "@/main/config/routes";
import setupDefaultHandlers from "@/main/config/handlers";

export const setupApp = (): Express => {
  const app = express();

  setupMiddlewares(app);
  setupRoutes(app);
  setupDefaultHandlers(app);

  return app;
};
