import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class ValidationError extends OperationalError {
  constructor(message = "Validation error") {
    super(message, StatusCode.UnprocessableEntity);
  }
}
