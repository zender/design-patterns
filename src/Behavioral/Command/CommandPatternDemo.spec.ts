import {
  describe,
  it,
} from "angular2/testing";
import {Stock} from "./Stock";
import {BuyStock} from "./BuyStock";
import {SellStock} from "./SellStock";
import {Broker} from "./Broker";

export function main() {
  describe('Command', () => {

    let abcStock: Stock = new Stock();
    let buyStockOrder: BuyStock = new BuyStock(abcStock);
    let sellStockOrder: SellStock = new SellStock(abcStock);
    let broker: Broker = new Broker();

    it('Should take buy order.', () => {
      broker.takeOrder(buyStockOrder);
    });

    it('Should take sell order.', () => {
      broker.takeOrder(sellStockOrder);
    });

    it('Should place orders.', () => {
      broker.placeOrders();
    });
  });
}
