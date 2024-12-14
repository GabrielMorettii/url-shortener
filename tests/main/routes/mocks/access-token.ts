import { JwtAdapter } from "@/infra/cryptography/jwt-adapter";
import env from "@/main/config/env";
import { mockUser } from "./user";

export const mockAccessToken = async (userId?: string): Promise<string> => {
  let mockUserId = userId;

  if (!mockUserId) {
    mockUserId = (await mockUser()).id!;
  }

  const jwt = new JwtAdapter(env.jwtSecret);

  return await jwt.encrypt(mockUserId);
};
