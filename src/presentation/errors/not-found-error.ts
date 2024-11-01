import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class NotFoundError extends OperationalError {
  constructor(message = "Not Found") {
    super(message, StatusCode.NotFound);
  }
}
