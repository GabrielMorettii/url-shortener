import {
  type NextFunction,
  type Request,
  type Response,
  type Express,
} from "express";
import { type OperationalError } from "@/presentation/errors";
import { errorHandler } from "../middlewares";

export default (app: Express): void => {
  app.use((req, res) => {
    res.status(404).json({
      message: "Not found!",
    });
  });

  app.use(
    (
      err: OperationalError,
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      errorHandler(err, request, response, next);
    },
  );
};
