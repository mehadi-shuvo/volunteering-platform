import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";

const catchAsync = (fun: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fun(req, res, next);
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err?.message || "Internal Server Error",
        error: err,
      });
    }
  };
};

export default catchAsync;
