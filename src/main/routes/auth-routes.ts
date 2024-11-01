import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeSignUpController } from "../factories";
import { makeLoginController } from "../factories/controllers/login-controller-factory";

export const authRouter = Router();

authRouter.post("/signup", adaptRoute(makeSignUpController()));
authRouter.post("/login", adaptRoute(makeLoginController()));
