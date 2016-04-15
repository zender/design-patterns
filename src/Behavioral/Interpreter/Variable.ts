import {ExpressionInterface} from './ExpressionInterface';

export class Variable implements ExpressionInterface {

  public constructor(private name: string) {
  }

  public interpret(variables: Map<string, ExpressionInterface>): number {
    return null === variables.get(this.name) ? 0 : variables.get(this.name).interpret(variables);
  }
}
