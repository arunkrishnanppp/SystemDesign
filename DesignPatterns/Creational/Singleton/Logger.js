export default class Logger {
  constructor() {
    if (Logger.instance == null) {
      this.logs = [];
      Logger.instance = this;
    }
  }
  getInstance() {
    return Logger.instance;
  }
  log(message) {
    this.logs.push(message);
    console.log(message);
  }
  printCount() {
    console.log(`${this.logs.length} Logs are present`);
  }
}

const logger = new Logger();
// const logger = loggerIns.getInstance();
export { logger };
