import {AbstractLogger} from "./AbstractLogger";

export class FileLogger extends AbstractLogger {

  public constructor() {
    super();
    this.level = AbstractLogger.DEBUG;
  }

  protected write(message: string): void {
    console.log('File::Logger: ' + message);
  }
}
