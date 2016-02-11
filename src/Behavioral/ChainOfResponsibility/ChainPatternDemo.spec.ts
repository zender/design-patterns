import {
  describe,
  it,
  expect,
  afterEach
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

describe('ChainOfResponsibility', () => {

  let chainLogger: AbstractLogger = getChainOfLoggers();

  afterEach(function() {
    AbstractLogger.messages = [];
  });

  it('Should log INFO', () => {
    chainLogger.logMessage(AbstractLogger.INFO, 'INFO');
    expect(AbstractLogger.messages).toEqual(['ConsoleLogger: INFO']);
  });

  it('Should log DEBUG', () => {
    chainLogger.logMessage(AbstractLogger.ERROR, 'DEBUG');
    expect(AbstractLogger.messages).toEqual([
      'ErrorLogger: DEBUG',
      'FileLogger: DEBUG',
      'ConsoleLogger: DEBUG'
    ]);
  });

  it('Should log ERROR', () => {
    chainLogger.logMessage(AbstractLogger.DEBUG, 'ERROR');
    expect(AbstractLogger.messages).toEqual([
      'FileLogger: ERROR',
      'ConsoleLogger: ERROR'
    ]);
  });
});
