import {CommandInterface} from "./CommandInterface";

export class LightOnCommand implements CommandInterface {

  private executed: boolean = false;

  public apply(): void {
    this.executed = true;
  }

  public isExecuted(): boolean {
    return this.executed;
  }

  public getName(): string {
    return 'Light On';
  }
}
