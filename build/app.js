"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const e6p = require("es6-promise");
const express = require("express");
const error_1 = require("./middlewares/error");
const routes_1 = require("./routes");
// import {Routes} from "./routes/routes";
const mongoose = require("./utils/mongoose");
e6p.polyfill();
class AppConfig {
    // public routePrv: Routes = new Routes();
    constructor() {
        this.app = express();
        this.middlewareSetup();
        // this.routePrv.routes(this.app);
        AppConfig.mongoSetup();
    }
    static mongoSetup() {
        mongoose.connect();
    }
    middlewareSetup() {
        const middleware = this.app;
        middleware.use(compression());
        middleware.enable("trust proxy");
        middleware.use(bodyParser.urlencoded({ extended: true }));
        middleware.use(bodyParser.json());
        middleware.use(cors());
        middleware.use("/v1", routes_1.router);
        // Error handling
        middleware.use(error_1.converter);
        // catch 404 and forward to error handler
        middleware.use(error_1.notFound);
        // error handler, send stacktrace only during development
        middleware.use(error_1.handler);
    }
}
const app = new AppConfig().app;
exports.default = app;
//# sourceMappingURL=app.js.map