import {
  describe,
  it,
  expect,
} from 'angular2/testing';
import {ExpressionInterface} from './ExpressionInterface';
import {Evaluator} from './Evaluator';
import {Number as Num} from './Number';

describe('Interpreter', () => {

  let expression: string = 'w x z - +';
  let evaluator: ExpressionInterface = new Evaluator(expression);
  let variables: Map<string, Num> = new Map<string, Num>();
  variables.set('w', new Num(5));
  variables.set('x', new Num(10));
  variables.set('z', new Num(42));

  it('Should interpret string', () => {
    var result = evaluator.interpret(variables);
    console.log(result);
    expect(result).toEqual(10);
  });

});
