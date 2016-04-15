import {ExpressionInterface} from './ExpressionInterface';

export class Number implements ExpressionInterface {

  public constructor(private number: number) {
  }

  public interpret(variables: Map<string, ExpressionInterface>): number {
    return this.number;
  }
}
