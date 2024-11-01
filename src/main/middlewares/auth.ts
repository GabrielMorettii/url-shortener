import { adaptMiddleware } from "@/main/adapters";
import { makeAuthMiddleware } from "@/main/factories";

export const checkAuthRequired = adaptMiddleware(makeAuthMiddleware());

export const checkAuthOptional = adaptMiddleware(makeAuthMiddleware(false));
