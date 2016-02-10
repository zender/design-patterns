export abstract class AbstractLogger {

  public static INFO: number = 1;

  public static DEBUG: number = 2;

  public static ERROR: number = 3;

  protected level: number;

  protected nextLogger: AbstractLogger = null;

  public setNextLogger(nextLogger: AbstractLogger): void {
    this.nextLogger = nextLogger;
  }

  public logMessage(level: number, message: string): void {
    if(this.level <= level) {
      this.write(message);
    }

    if(this.nextLogger !== null) {
      this.nextLogger.logMessage(level, message);
    }
  }

  protected abstract write(message: string): void;
}
