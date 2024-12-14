import { StatusCode } from "../helpers";
import { OperationalError } from "./operational-error";

export class TooManyRequestsError extends OperationalError {
  constructor(message = "Too many requests") {
    super(message, StatusCode.TooManyRequests);
  }
}
