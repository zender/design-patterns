import {AbstractLogger} from './AbstractLogger';

export class FileLogger extends AbstractLogger {

  public constructor() {
    super();
    this.level = AbstractLogger.DEBUG;
  }

  protected write(message: string): string {
    return 'File::Logger: ' + message;
  }
}
