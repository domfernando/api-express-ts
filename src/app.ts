import express from 'express';
import cors from 'cors';
import routes from './routes';
import { logger } from './util/Logger';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './util/swagger-output.json';
import bodyParser from 'body-parser';

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
        this.express.use(bodyParser.json());
        this.express.use(routes);
        this.express.use("/",express.static("public"));
        this.express.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
        logger.info("Rotas definidas");
    }
}

export default new App().express;