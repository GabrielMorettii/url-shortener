import { StatusCode } from "../helpers";

export class OperationalError extends Error {
  constructor(
    message: string,
    public readonly statusCode = StatusCode.InternalServerError,
  ) {
    super(message);
  }
}
