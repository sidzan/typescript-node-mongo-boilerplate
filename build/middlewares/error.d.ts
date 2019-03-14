import { NextFunction, Request, Response } from "express";
/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export declare function handler(err: any, _: Request, res: Response, next: NextFunction): any;
/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export declare function converter(err: any, req: Request, res: Response, next: NextFunction): any;
/**
 * Catch 404 and forward to error handler
 * @public
 */
export declare function notFound(req: Request, res: Response, next: NextFunction): any;
