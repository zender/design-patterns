import {
    describe,
    it,
} from "angular2/testing";

import {ConsoleLogger} from "./ConsoleLogger";
import {ErrorLogger} from "./ErrorLogger";
import {FileLogger} from "./FileLogger";
import {AbstractLogger} from "./AbstractLogger";

function getChainOfLoggers() {

  let consoleLogger: AbstractLogger = new ConsoleLogger();
  let errorLogger: AbstractLogger = new ErrorLogger();
  let fileLogger: AbstractLogger = new FileLogger();

  errorLogger.setNextLogger(fileLogger);
  fileLogger.setNextLogger(consoleLogger);

  return errorLogger;
}

export function main() {
  describe('ChainOfResponsibility', () => {

    let chainLogger: AbstractLogger = getChainOfLoggers();

    it('Should log INFO', () => {
      chainLogger.logMessage(AbstractLogger.INFO, 'INFO');
    });

    it('Should log DEBUG', () => {
      chainLogger.logMessage(AbstractLogger.ERROR, 'DEBUG');
    });

    it('Should log ERROR', () => {
      chainLogger.logMessage(AbstractLogger.DEBUG, 'ERROR');
    });
  });
}
