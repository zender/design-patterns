import {AbstractLogger} from "./AbstractLogger";

export class FileLogger extends AbstractLogger {

  public constructor() {
    super();
    this.level = AbstractLogger.DEBUG;
  }

  protected write(message: string): void {
    AbstractLogger.messages.push('FileLogger: ' + message);
  }
}
