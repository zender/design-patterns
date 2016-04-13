import {ExpressionInterface} from './ExpressionInterface';

export class Variable implements ExpressionInterface {

  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public interpret(variables: Map<string, ExpressionInterface>): number {
    return null === variables.get(this.name) ? 0 : variables.get(this.name).interpret(variables);
  }
}
