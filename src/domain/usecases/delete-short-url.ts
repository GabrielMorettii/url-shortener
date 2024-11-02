export interface DeleteShortUrl {
  handle(request: DeleteShortUrlRequest): Promise<void>;
}

export interface DeleteShortUrlRequest {
  shortUrl: string;
  userId: string;
}
