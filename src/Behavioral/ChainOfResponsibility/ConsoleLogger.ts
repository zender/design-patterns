import {AbstractLogger} from "./AbstractLogger";

export class ConsoleLogger extends AbstractLogger {

  public constructor() {
    super();
    this.level = AbstractLogger.INFO;
  }

  protected write(message: string): void {
    console.log('Standard::Logger: ' + message);
  }
}
