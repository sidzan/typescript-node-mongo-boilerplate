"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const os = require("os");
// const hostname = os.hostname();
const httpStatus = require("http-status");
const expressValidation = require("express-validation");
const APIError = require("./APIError");
const Chalk = require("chalk");
/**
 * Error handler. Send stacktrace only during development
 * @public
 */
function handler(err, _, res, next) {
    // @ts-ignore
    const state = 500;
    // @ts-ignore
    const response = {
        code: err.status,
        error: true,
        errors: err.errors,
        reason: err.message || state,
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
exports.handler = handler;
/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
function converter(err, req, res, next) {
    let convertedError = err;
    if (err instanceof expressValidation.ValidationError) {
        convertedError = new APIError({
            errors: err.errors,
            message: "Validation Error",
            stack: err.stack,
            status: err.status
        });
    }
    else if (!(err instanceof APIError)) {
        convertedError = new APIError({
            message: err.message,
            stack: err.stack,
            status: err.status
        });
    }
    return handler(convertedError, req, res, next);
}
exports.converter = converter;
/**
 * Catch 404 and forward to error handler
 * @public
 */
function notFound(req, res, next) {
    const err = new APIError({
        message: "Not found",
        status: httpStatus.NOT_FOUND
    });
    return handler(err, req, res, next);
}
exports.notFound = notFound;
//# sourceMappingURL=error.js.map