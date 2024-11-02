import { type DeleteShortUrlRequest } from "@/domain/usecases";

export interface DeleteShortUrlRepository {
  delete(data: DeleteShortUrlRequest): Promise<void>;
}
