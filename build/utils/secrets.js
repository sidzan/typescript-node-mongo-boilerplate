"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
const Chalk = require("chalk");
if (fs.existsSync(".env")) {
    console.info(Chalk.black.bgGreen(`Using .env file to supply config environment variables`));
    dotenv.config({ path: ".env" });
}
else {
    console.info(Chalk.black.bgGreen(`Using .env file to supply config environment variables`));
    dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === "production"; // Anything else is treated as 'dev'
exports.SESSION_SECRET = process.env.SESSION_SECRET;
exports.MONGODB_URI = prod ? process.env.MONGODB_URI : process.env.MONGODB_URI_LOCAL;
exports.HOST = process.env.HOST;
exports.PORT = Number(process.env.PORT);
if (!exports.SESSION_SECRET) {
    console.error(Chalk.bgRed(`No client secret. Set SESSION_SECRET environment variable.`));
    process.exit(1);
}
if (!exports.MONGODB_URI) {
    console.error(Chalk.bgRed(`No mongo connection string. Set MONGODB_URI environment variable.`));
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map