import * as httpStatus from "http-status";

/**
 * @extends Error
 */
interface IError {
    name?: string;
    message: string;
    errors: any;
    status: number;
    isPublic: any;
    isOperational?: boolean;
    stack: any;
}

class ExtendableError extends Error {
    public message: string;
    public name: string;
    public errors: any;
    public status: number;
    public isPublic: any;
    public isOperational: boolean;
    public stack: any;

    constructor({message, errors, status, isPublic, stack}: IError) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errors = errors;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        this.stack = stack;
        // Error.captureStackTrace(this, this.constructor.name);
    }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError { // tslint:disable-line
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param errors
     * @param stack
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor({message, errors, stack, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false}: IError) {
        super({message, errors, status, isPublic, stack});
    }
}

module.exports = APIError;
