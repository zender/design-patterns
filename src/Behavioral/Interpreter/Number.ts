import {ExpressionInterface} from "./ExpressionInterface";

export class Number implements ExpressionInterface {

  private number: number;

  public constructor(number: number) {
    this.number = number;
  }

  public interpret(variables: Map<string, ExpressionInterface>): number {
    return this.number;
  }
}
