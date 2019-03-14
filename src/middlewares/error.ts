// const os = require("os");
// const hostname = os.hostname();
import * as httpStatus from "http-status";

const expressValidation = require("express-validation");
const APIError = require("./APIError");
const Chalk = require("chalk");

import {NextFunction, Request, Response} from "express";

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export function handler(err: any, _: Request, res: Response, next: NextFunction): any {
    // @ts-ignore
    const state: number = 500;
    // @ts-ignore
    const response = {
        code: err.status,
        error: true,
        errors: err.errors,
        reason: err.message || state, // tslint:disable-line
        stack: err.stack
    };
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        delete response.stack;
    }
    res.status(err.status);
    res.json(response);
    if (next) {
        // @ts-supress
        console.error(Chalk.bgRed(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
        console.error("Response", response);
        console.error(Chalk.bgRed(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Error End >>>>>>>>>>>>>>>>>>>>>>>>>>"));
    }
}

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export function converter(err: any, req: Request, res: Response, next: NextFunction): any {
    let convertedError = err;

    if (err instanceof expressValidation.ValidationError) {
        convertedError = new APIError({
                                          errors: err.errors,
                                          message: "Validation Error",
                                          stack: err.stack,
                                          status: err.status
                                      });
    } else if (!(err instanceof APIError)) {
        convertedError = new APIError({
                                          message: err.message,
                                          stack: err.stack,
                                          status: err.status
                                      });
    }
    return handler(convertedError, req, res, next);
}

/**
 * Catch 404 and forward to error handler
 * @public
 */
export function notFound(req: Request, res: Response, next: NextFunction): any {
    const err = new APIError({
                                 message: "Not found",
                                 status: httpStatus.NOT_FOUND
                             });
    return handler(err, req, res, next);
}
