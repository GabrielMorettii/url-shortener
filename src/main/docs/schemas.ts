import {
  userSchema,
  loginParamsSchema,
  errorSchema,
  signUpParamsSchema,
  shortUrlSchema,
} from "./schemas/";

export default {
  user: userSchema,
  shortUrl: shortUrlSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
};
