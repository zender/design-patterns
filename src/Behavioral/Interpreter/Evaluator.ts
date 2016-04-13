import {ExpressionInterface} from './ExpressionInterface';
import {Plus} from './Plus';
import {Minus} from './Minus';
import {Variable} from './Variable';

export class Evaluator implements ExpressionInterface {

  private syntaxTree: ExpressionInterface;

  public constructor(expression: string) {

    var expressionStack: Array<ExpressionInterface> = new Array();

    expression.split(' ').forEach(function(token: string){
      if(token === '+') {
        var subExpression: ExpressionInterface = new Plus(expressionStack.pop(), expressionStack.pop());
        expressionStack.push(subExpression);
      } else if (token === '-') {
        var right: ExpressionInterface = expressionStack.pop();
        var left: ExpressionInterface = expressionStack.pop();

        var subExpression: ExpressionInterface = new Minus(left, right);
        expressionStack.push(subExpression);
      } else {
        expressionStack.push(new Variable(token));
      }
    });

    this.syntaxTree = expressionStack.pop();
  }

  public interpret(context: Map<string, ExpressionInterface>): number {
    return this.syntaxTree.interpret(context);
  }
}
