import { type Middleware } from "@/presentation/protocols";
import { AuthMiddleware } from "@/presentation/middlewares";
import env from "@/main/config/env";
import { JwtAdapter } from "@/infra/cryptography/jwt-adapter";

export const makeAuthMiddleware = (): Middleware => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  return new AuthMiddleware(jwtAdapter);
};
