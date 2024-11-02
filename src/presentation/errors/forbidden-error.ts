import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class ForbiddenError extends OperationalError {
  constructor(message = "Forbidden") {
    super(message, StatusCode.Forbidden);
  }
}
