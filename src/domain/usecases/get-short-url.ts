import { type ShortUrlModel } from "../models";

export interface GetShortUrl {
  handle(request: GetShortUrlRequest): Promise<ShortUrlModel>;
}

export interface GetShortUrlRequest {
  shortUrl: string;
}
