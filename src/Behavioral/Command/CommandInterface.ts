export interface CommandInterface {

  getName(): string;

  apply(): void;

  isExecuted(): boolean;
}
