// import Logger from './Logger.js';
import Logger, { logger } from './Logger.js';

// const logger = new Logger();
// const logger = Logger.getInstance();

export default class LogSecondImpl {
  log() {
    logger.log('Second user logging');
    logger.printCount();
  }
}
