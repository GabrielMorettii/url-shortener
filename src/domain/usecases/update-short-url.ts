import { type ShortUrlModel } from "../models";

export interface UpdateShortUrl {
  handle(request: UpdateShortUrlRequest): Promise<ShortUrlModel>;
}

export interface UpdateShortUrlRequest {
  shortUrl: string;
  userId?: string;
  originalUrl?: string;
  clicks?: number;
}
