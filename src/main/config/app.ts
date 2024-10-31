import express, { type Express } from "express";
import setupMiddlewares from "@/main/config/middlewares";

export const setupApp = (): Express => {
  const app = express();

  setupMiddlewares(app);

  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  return app;
};
