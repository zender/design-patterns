import {AbstractLogger} from "./AbstractLogger";

export class ErrorLogger extends AbstractLogger {

  public constructor() {
    super();
    this.level = AbstractLogger.ERROR;
  }

  protected write(message: string): void {
    AbstractLogger.messages.push('ErrorLogger: ' + message);
  }
}
