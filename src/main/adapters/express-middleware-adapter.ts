import { type Middleware } from "@/presentation/protocols";

import { type Request, type Response, type NextFunction } from "express";

export const adaptMiddleware = (middleware: Middleware) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const request = {
      accessToken: req.headers?.authorization,
      ...(req.headers || {}),
    };

    const httpResponse = middleware.handle(request);

    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        status: httpResponse.statusCode,
        error: httpResponse.body.message,
      });
    }
  };
};
