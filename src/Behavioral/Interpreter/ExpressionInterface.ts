export interface ExpressionInterface {
  interpret(variables: Map<string, ExpressionInterface>): number;
}
