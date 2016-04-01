import {
  describe,
  it,
  expect,
} from "angular2/testing";
import {ExpressionInterface} from "./ExpressionInterface";
import {Evaluator} from "./Evaluator";
import {Number} from "./Number";

describe('Interpreter', () => {

  let expression: string = "w x z - +";
  let evaluator: ExpressionInterface = new Evaluator(expression);
  let variables: Map<string, ExpressionInterface> = new Map();
  variables.set('w', new Number(5));
  variables.set('x', new Number(10));
  variables.set('z', new Number(42));

  it('Should interpret string', () => {
    var result = evaluator.interpret(variables);
    console.log(result);
    expect(result).toEqual(10);
  });

});
