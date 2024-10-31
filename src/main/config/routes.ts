import { type Express, Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export default (app: Express): void => {
  const router = Router();

  app.use(router);

  readdirSync(join(__dirname, "../routes")).map(async (file) => {
    (await import(`../routes/${file}`)).default(router);
  });
};
