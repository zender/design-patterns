import {
    describe,
    expect,
    it,
} from 'angular2/testing';

import {ConsoleLogger} from './ConsoleLogger';
import {ErrorLogger} from './ErrorLogger';
import {FileLogger} from './FileLogger';
import {AbstractLogger} from './AbstractLogger';

function getChainOfLoggers() {

  let consoleLogger:AbstractLogger = new ConsoleLogger();
  let errorLogger:AbstractLogger = new ErrorLogger();
  let fileLogger:AbstractLogger = new FileLogger();

  errorLogger.setNextLogger(fileLogger);
  fileLogger.setNextLogger(consoleLogger);

  return errorLogger;
}

export function main() {
    describe('ChainOfResponsibility', () => {

        let chainLogger:AbstractLogger = getChainOfLoggers();

        it('Should log INFO', () => {
            expect(chainLogger.logMessage(AbstractLogger.INFO, 'INFO')).toEqual('Standard::Logger: INFO');
        });

        it('Should log DEBUG', () => {
            expect(chainLogger.logMessage(AbstractLogger.ERROR, 'DEBUG')).toEqual('Error::Logger: DEBUG');
        });

        it('Should log ERROR', () => {
            expect(chainLogger.logMessage(AbstractLogger.DEBUG, 'ERROR')).toEqual('File::Logger: ERROR');
        });
    });
}
