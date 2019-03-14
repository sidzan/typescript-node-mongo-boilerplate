import app from "./app";

const Chalk = require("chalk");
import {HOST, PORT} from "./utils/secrets";

const server = app.listen(PORT, HOST, (err: any) => {
    if (err) {
        console.error(Chalk.bgRed(err));
    } else {
        console.info(Chalk.black.bgGreen(
            `\n\n💂  Listening at http://${HOST}:${PORT}\n`
        ));
    }
});

export default server;
