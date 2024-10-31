import { DbAddUser } from "@/data/usecases";
import { type AddUser } from "@/domain/usecases";

export const makeAddUser = (): AddUser => {
  return new DbAddUser();
};
