const express = require("express");
import {NextFunction, Request, Response} from "express";   // tslint:disable-next-line

// const test = require("./test.route");

// tslint:disable-next-line
export const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (_: Request, res: Response, next: NextFunction) => {
    try {
        // res.send("Hi");
        throw new Error("oops");
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

/**
 * GET v1/docs
 */

// tslint
