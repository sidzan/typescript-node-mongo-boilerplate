import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as e6p from "es6-promise";
import {Application} from "express";   // tslint:disable-next-line
import * as express from "express";
import {converter, handler, notFound} from "./middlewares/error";
import {router} from "./routes";
// import {Routes} from "./routes/routes";
const mongoose = require("./utils/mongoose");
(e6p as any).polyfill();

class AppConfig {
    public app: Application = express();

    // public routePrv: Routes = new Routes();

    constructor() {
        this.middlewareSetup();
        // this.routePrv.routes(this.app);
        AppConfig.mongoSetup();
    }

    private static mongoSetup(): void {
        mongoose.connect();
    }

    private middlewareSetup(): void {
        const middleware = this.app;
        middleware.use(compression());
        middleware.enable("trust proxy");
        middleware.use(bodyParser.urlencoded({extended: true}));
        middleware.use(bodyParser.json());
        middleware.use(cors());

        middleware.use("/v1", router);

        // Error handling
        middleware.use(converter);
        // catch 404 and forward to error handler
        middleware.use(notFound);
        // error handler, send stacktrace only during development
        middleware.use(handler);
    }

}

const app = new AppConfig().app;
export default app;
