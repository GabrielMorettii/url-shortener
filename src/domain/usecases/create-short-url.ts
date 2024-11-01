export interface CreateShortUrl {
  handle(request: CreateShortUrlRequest): Promise<CreateShortUrlResponse>;
}

export interface CreateShortUrlRequest {
  url: string;
  userId?: string;
}

export interface CreateShortUrlResponse {
  shortUrl: string;
}
