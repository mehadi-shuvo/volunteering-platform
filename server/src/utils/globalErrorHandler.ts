import { Request, Response, NextFunction } from "express";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: err,
  });
};

export default globalErrorHandler;
