import { Request, Response, NextFunction } from "express";
import HttpException from "./http-exception";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message = "Resource not found";

  response.status(404).send(message);
  next(message)
};
