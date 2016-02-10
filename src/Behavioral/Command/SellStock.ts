import {OrderInterface} from "./OrderInterface";
import {Stock} from "./Stock";

export class SellStock implements OrderInterface {

  private abcStock: Stock;

  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }

  public execute(): void {
    this.abcStock.sell();
  }
}
