import { JwtAdapter } from "@/infra/cryptography/jwt-adapter";
import { prisma } from "@/infra/db";

import env from "@/main/config/env";

export const mockAccessToken = async (userId?: string): Promise<string> => {
  let mockUserId = userId;

  if (!mockUserId) {
    mockUserId = (
      await prisma.user.create({
        data: {
          name: "anyuser",
          email: "anyuser@gmail.com",
          password: "any",
        },
      })
    ).id;
  }

  const jwt = new JwtAdapter(env.jwtSecret);

  return await jwt.encrypt(mockUserId);
};
