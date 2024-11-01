import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class InternalServerError extends OperationalError {
  constructor(message = "Internal server error") {
    super(message, StatusCode.InternalServerError);
  }
}
