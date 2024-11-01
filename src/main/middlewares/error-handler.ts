import { type NextFunction, type Request, type Response } from "express";
import { OperationalError } from "@/presentation/errors";
import { StatusCode } from "@/presentation/helpers";
import env from "../config/env";

export function errorHandler(
  error: OperationalError,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  const isOperationalError = error instanceof OperationalError;

  if (!isOperationalError) {
    const isDevelopmentMode = env.enviroment === "development";
    const message = isDevelopmentMode
      ? (error as Error).message
      : "Internal server error";

    return response.status(StatusCode.InternalServerError).json({
      status: StatusCode.InternalServerError,
      message,
    });
  }

  const { statusCode: status, message } = error;

  return response.status(status).json({
    status,
    message,
  });
}
