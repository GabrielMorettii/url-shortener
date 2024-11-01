import { type ShortUrlModel } from "../models";

export interface GetAllUserShortUrl {
  handle(request: GetAllUserShortUrlRequest): Promise<ShortUrlModel[]>;
}

export interface GetAllUserShortUrlRequest {
  userId: string;
}
