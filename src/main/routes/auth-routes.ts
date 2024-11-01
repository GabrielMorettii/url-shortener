import { type Router } from "express";
import { adaptRoute } from "../adapters";
import { makeSignUpController } from "../factories";
import { makeLoginController } from "../factories/controllers/login-controller-factory";

export default (router: Router): void => {
  router.post("/auth/signup", adaptRoute(makeSignUpController()));
  router.post("/auth/login", adaptRoute(makeLoginController()));
};
