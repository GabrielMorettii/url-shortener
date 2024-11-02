import {
  createShortUrlPath,
  getShortUrlPath,
  getUserShortUrlPath,
  loginPath,
  shortUrlPath,
  signUpPath,
} from "./paths/";

export default {
  "/auth/login": loginPath,
  "/auth/signup": signUpPath,
  "/{shortUrl}": getShortUrlPath,
  "/short-url": createShortUrlPath,
  "/short-url/{shortUrl}": shortUrlPath,
  "/short-url/user": getUserShortUrlPath,
};
