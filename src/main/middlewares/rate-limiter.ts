import { TooManyRequestsError } from "@/presentation/errors";
import { rateLimit } from "express-rate-limit";

const fifteenMinutesInMilliseconds = 15 * 60 * 1000;

const error = new TooManyRequestsError();

export const rateLimiter = rateLimit({
  windowMs: fifteenMinutesInMilliseconds,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: error.statusCode,
    message: error.message,
  },
});
