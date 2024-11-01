import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class BadRequestError extends OperationalError {
  constructor(message = "Bad Request") {
    super(message, StatusCode.BadRequest);
  }
}
