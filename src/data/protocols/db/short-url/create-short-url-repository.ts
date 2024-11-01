import { type ShortUrlModel } from "@/domain/models";

export interface CreateShortUrlRepository {
  create(data: CreateShortUrlParams): Promise<ShortUrlModel>;
}

export interface CreateShortUrlParams {
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  userId?: string;
}
