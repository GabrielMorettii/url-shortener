import { type HttpResponse } from "@/presentation/protocols";

export interface Controller<T = any, R = any> {
  handle: (request: T, response: R) => Promise<HttpResponse | void>;
}
