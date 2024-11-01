import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class UnauthorizedError extends OperationalError {
  constructor(message = "Unauthorized") {
    super(message, StatusCode.Unauthorized);
  }
}
