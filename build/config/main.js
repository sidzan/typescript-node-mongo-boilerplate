"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    env: process.env.NODE_ENV || "development",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 9999,
    ssr: false,
    sentry: {
        dsn: "",
        options: {}
    },
    // This part goes to React-Helmet for Head of our HTML
    app: {
        head: {
            title: "Bchu - Boiler - plate",
            meta: [
                { charset: "utf-8" },
                { "http-equiv": "x-ua-compatible", content: "ie=edge" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "React Redux Typescript" },
            ]
        }
    }
};
exports.default = config;
//# sourceMappingURL=main.js.map