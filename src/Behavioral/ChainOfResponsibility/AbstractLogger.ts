export abstract class AbstractLogger {

    public static INFO: number = 1;

    public static DEBUG: number = 2;

    public static ERROR: number = 3;

    protected level: number;

    protected nextLogger: AbstractLogger;

    public setNextLogger(nextLogger: AbstractLogger): void {
        this.nextLogger = nextLogger;
    }

    public logMessage(level: number, message: string): string {
        if(this.level <= level) {
            return this.write(message);
        }

        if(this.nextLogger !== null) {
            return this.nextLogger.logMessage(level, message);
        }
    }

    protected abstract write(message: string): string;
}
