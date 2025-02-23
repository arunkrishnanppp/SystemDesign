import Logger, { logger } from './Logger.js';
// const logger = Logger.getInstance();

export default class LogFirstImpl {
  log() {
    logger.log('First user logging');
    logger.printCount();
    console.log(Logger.instance);

    Logger.instance = null;
    console.log(Logger.instance);
  }
}
