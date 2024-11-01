import { type NextFunction, type Request, type Response } from "express";
import { type OperationalError } from "@/presentation/errors";

export function errorHandler(
  error: OperationalError,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  const status = error.statusCode || 500;
  const message = error.message || "Internal server error";

  return response.status(status).json({
    status,
    message,
  });
}
