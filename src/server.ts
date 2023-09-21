import app from "./app";
import { logger } from "./util/Logger";

require('dotenv/config');

app.listen(process.env.PORT, () => {
    logger.info('Iniciado: ' + process.env.URL + ':' + process.env.PORT);
});