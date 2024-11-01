import { type NextFunction, type Request, type Response } from "express";
import { OperationalError } from "@/presentation/errors";
import { StatusCode } from "@/presentation/helpers";

export function errorHandler(
  error: OperationalError,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  const isOperationalError = error instanceof OperationalError;

  if (!isOperationalError) {
    return response.status(StatusCode.InternalServerError).json({
      status: StatusCode.InternalServerError,
      message: "Internal server error",
    });
  }

  const { statusCode: status, message } = error;

  return response.status(status).json({
    status,
    message,
  });
}
