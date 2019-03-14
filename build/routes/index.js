"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// const test = require("./test.route");
// tslint:disable-next-line
exports.router = express.Router();
/**
 * GET v1/status
 */
exports.router.get("/status", (_, res, next) => {
    try {
        // res.send("Hi");
        throw new Error("oops");
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
});
/**
 * GET v1/docs
 */
// tslint
//# sourceMappingURL=index.js.map