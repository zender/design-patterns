import {ExpressionInterface} from './ExpressionInterface';

export class Plus implements ExpressionInterface {

  public constructor(private leftOperand:ExpressionInterface, private rightOperand:ExpressionInterface) {
  }

  public interpret(variables:Map<string, ExpressionInterface>):number {
    return this.leftOperand.interpret(variables) + this.rightOperand.interpret(variables);
  }
}
