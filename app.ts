import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import type { ErrorRequestHandler } from "express";
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import compression from "compression";
import cors from 'cors';
import {CommonRoutesConfig} from './common/common.routes.config';
import {InventoryRoutes} from './inventory/inventory.routes.config';
import debug from 'debug';
import Db from "./db";
import InventoryJob from "./jobs/inventory.job";
import config from "./common/utils/config"

Db.intializeDB()

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = config.port;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// adding middleware to parse all incoming requests as JSON 
app.use(express.json());

// adding middleware to allow cross-origin requests
app.use(cors());

app.use(compression());


// preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
    if (typeof global.it === 'function') {
        loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
    }
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

routes.push(new InventoryRoutes(app));

// this is a simple route to make sure everything is working properly
const runningMessage = `Perishable Inventory Version Number: BEM202103 Server running at port ${port}`;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err)
    res.statusCode = 401;
    res.end(err.message);
};

// fallthrough error handler
app.use(errorHandler);


export default server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    InventoryJob.CleanDb()
    console.log(runningMessage);
});