export interface UpdateShortUrl {
  handle(request: UpdateShortUrlRequest): Promise<void>;
}

export interface UpdateShortUrlRequest {
  id: string;
  clicks: number;
}
