import 'dotenv/config';

import http, { Server } from 'http';
import { createHttpTerminator, HttpTerminator } from 'http-terminator';
import express, { Application } from 'express';
import { Logger } from '@assetory/logger';
import path from 'path';

import { ApiConfig, DBConfig } from './config';
import { testRoute } from './api';

/**
 * @class App
 * @description The main application class
 * @example
 * import App from './App';
 * const app = new App();
 */
class App
{
    app: Application;
    server: Server;
    terminator: HttpTerminator;
    serviceName : string;
    servicePort : number;
    logger : Logger;

    /**
     * @constructor
     */
    constructor()
    {
        this.app = express();
        this.server = new http.Server(this.app);
        this.terminator = createHttpTerminator({ server: this.server });
        this.serviceName = String(process.env.SERVICE_NAME);
        this.servicePort = Number(process.env.SERVICE_PORT);
        this.logger = new Logger({
            serviceName: process.env.SERVICE_NAME,
            throwErrors: true,
            connectOptions:
            {
                port: 6379,
                host: 'redis_logger',
                servername: 'redis_logger',
            },
        });
    }

    /**
     * @async
     * @method init
     * @description Handles the automatic start of configuration methods to set up the application.
     * @example
     * app.init();
     * @callback { Promise<boolean> }
     * @returns { boolean }
     */
    async init() : Promise<boolean>
    {
        await this.config();
        await this.routes();
        await this.start();

        return await true;
    }

    /**
     * @method config
     * @returns { ApiConfig() }
     */
    config() : ApiConfig
    {
        const apiConfig = new ApiConfig(this.app, this.logger);

        return { apiConfig };
    }

    /**
     * @method apiRoutes
     * @description Handles the setup of Api routes.
     */
    routes() : void
    {
        this.app.get(`/${ this.serviceName }/api/test`, testRoute);
        this.app.get(`/${ this.serviceName }/*`, (req, res) =>
        {
            res.sendFile(path.join(__dirname, '../../build/client', 'index.html'));
        });
    }

    /**
     * @method start
     * @description Starts the server on the given service-name and port.
     */
    start() : void
    {
        this.server.listen(this.servicePort, () =>
        {
            this.logger.info(`Service started => http://${ process.env.SERVICE_ENV === 'local' ? 'localhost' : 'develop.assetory.net'}/${this.serviceName}/api/test`);
        });
    }

    /**
     * @async
     * @method stop
     * @description Stop the currently running server and logger
     * @callback { Promise<boolean> }
     * @returns { boolean }
     */
    async stop() : Promise<boolean>
    {
        await this.logger.client.quit();
        await this.terminator.terminate();
        
        return await true;
    }
}

export default App;
