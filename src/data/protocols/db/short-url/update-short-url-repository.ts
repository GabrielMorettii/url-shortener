import { type UpdateShortUrlRequest } from "@/domain/usecases";

export interface UpdateShortUrlRepository {
  update(data: UpdateShortUrlRequest): Promise<void>;
}
