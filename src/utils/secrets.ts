import * as dotenv from "dotenv";
import * as fs from "fs";

const Chalk = require("chalk");

if (fs.existsSync(".env")) {
    console.info(Chalk.black.bgGreen(
        `Using .env file to supply config environment variables`
    ));
    dotenv.config({path: ".env"});
} else {
    console.info(Chalk.black.bgGreen(
        `Using .env file to supply config environment variables`
    ));
    dotenv.config({path: ".env.example"});  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env.SESSION_SECRET;
export const MONGODB_URI = prod ? process.env.MONGODB_URI : process.env.MONGODB_URI_LOCAL;

export const HOST = process.env.HOST;
export const PORT = Number(process.env.PORT);

if (!SESSION_SECRET) {
    console.error(Chalk.bgRed(`No client secret. Set SESSION_SECRET environment variable.`));
    process.exit(1);
}

if (!MONGODB_URI) {
    console.error(Chalk.bgRed(`No mongo connection string. Set MONGODB_URI environment variable.`));
    process.exit(1);
}
