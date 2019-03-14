"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const Chalk = require("chalk");
const secrets_1 = require("./utils/secrets");
const server = app_1.default.listen(secrets_1.PORT, secrets_1.HOST, (err) => {
    if (err) {
        console.error(Chalk.bgRed(err));
    }
    else {
        console.info(Chalk.black.bgGreen(`\n\n💂  Listening at http://${secrets_1.HOST}:${secrets_1.PORT}\n`));
    }
});
exports.default = server;
//# sourceMappingURL=server.js.map