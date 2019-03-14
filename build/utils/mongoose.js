"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const secrets_1 = require("./secrets");
const appConfig = require("../config/main");
const Chalk = require("chalk");
// set mongoose Promise to Bluebird
mongoose.Promise = Promise;
mongoose.connection.on("connecting", () => {
    console.info(Chalk.bgYellow("Connecting"));
});
mongoose.connection.on("connected", () => {
    console.info(Chalk.bgGreen("Connected"));
});
mongoose.connection.on("disconnected", function () {
    console.error(Chalk.bgRed("mongo db connection closed"));
});
mongoose.connection.on("error", (err) => {
    console.error(Chalk.bgRed(`MongoDB connection error: ${err}`));
    process.exit(-1);
});
mongoose.connection.on("reconnect", () => {
    console.log("-> reconnected");
});
// print mongoose logs in dev env
if (appConfig.env === "development") {
    mongoose.set("debug", true);
}
/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
    mongoose.connect(secrets_1.MONGODB_URI, {
        keepAlive: true,
        useNewUrlParser: true
    });
    return mongoose.connection;
};
//# sourceMappingURL=mongoose.js.map