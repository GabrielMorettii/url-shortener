import { json } from "express";

const bodyPayloadLimit = "10kb";

export const bodyParser = json({
  limit: bodyPayloadLimit,
});
