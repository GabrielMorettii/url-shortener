import { type ShortUrlModel } from "@/domain/models";
import { type GetShortUrlRequest } from "@/domain/usecases";

export interface GetShortUrlRepository {
  get(data: GetShortUrlRequest): Promise<ShortUrlModel | undefined>;
}
