import Pino from "pino";
//import { APP_ID, LOG_LEVEL } from "./Config";

export const logger = Pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});