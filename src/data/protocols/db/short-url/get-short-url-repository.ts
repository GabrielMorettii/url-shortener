import { type ShortUrlModel } from "@/domain/models";
import {
  type GetAllUserShortUrlRequest,
  type GetShortUrlRequest,
} from "@/domain/usecases";

export interface GetShortUrlRepository {
  get(data: GetShortUrlRequest): Promise<ShortUrlModel | undefined>;
  getAllByUser(data: GetAllUserShortUrlRequest): Promise<ShortUrlModel[]>;
}
