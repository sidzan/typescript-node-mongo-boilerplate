/** General Configurations Like PORT, HOST names and etc... */
interface IConfig {
    env: string;
    host: string;
    port: number | string;
    sentry: any;
    app: any;
    ssr: boolean;
}
declare const config: IConfig;
export default config;
