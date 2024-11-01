import { type PrismaClient } from "@prisma/client";
import {
  type AddUserRepository,
  type FindUserByEmailRepository,
} from "@/data/protocols/db";
import { type UserModel } from "@/domain/models";
import { type AddUserRequest } from "@/domain/usecases";

export class PrismaUserRepository
  implements AddUserRepository, FindUserByEmailRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  async add(data: AddUserRequest): Promise<UserModel> {
    const userCreated = await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });

    const { password, ...user } = userCreated;

    return user as UserModel;
  }

  async findByEmail(email: string): Promise<UserModel | undefined> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user ?? undefined;
  }
}
