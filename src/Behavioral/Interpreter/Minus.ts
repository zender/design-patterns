import {ExpressionInterface} from './ExpressionInterface';

export class Minus implements ExpressionInterface {

  private leftOperand: ExpressionInterface;

  private rightOperand: ExpressionInterface;

  public constructor(leftOperand: ExpressionInterface, rightOperand: ExpressionInterface) {
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
  }

  public interpret(variables: Map<string, ExpressionInterface>): number {
    return this.leftOperand.interpret(variables) - this.rightOperand.interpret(variables);
  }
}
