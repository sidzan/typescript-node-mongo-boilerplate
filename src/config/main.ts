/** General Configurations Like PORT, HOST names and etc... */
interface IConfig {
    env: string;
    host: string;
    port: number | string;
    sentry: any;
    app: any;
    ssr: boolean;
}

const config: IConfig = {
    env: process.env.NODE_ENV || "development",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 9999,
    ssr: false,
    sentry: {
        dsn: "", // your sentry dsn here
        options: {}
    },
    // This part goes to React-Helmet for Head of our HTML
    app: {
        head: {
            title: "Bchu - Boiler - plate",
            meta: [
                {charset: "utf-8"},
                {"http-equiv": "x-ua-compatible", content: "ie=edge"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {name: "description", content: "React Redux Typescript"},
            ]
        }
    }
};

export default config;
