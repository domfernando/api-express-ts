import express from 'express';
import cors from 'cors';
import routes from './routes';
import { logger } from './util/Logger';

class App {

    public express: express.Application;
 
    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        logger.info("Middlewares");
    }

    private routes(): void {
        this.express.use(routes);
        this.express.use("/",express.static("public"));
        logger.info("Rotas definidas");
    }
}

export default new App().express;