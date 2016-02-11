import {
  describe,
  it,
  expect,
} from "angular2/testing";
import {Stock} from "./Stock";
import {BuyStock} from "./BuyStock";
import {SellStock} from "./SellStock";
import {Broker} from "./Broker";

describe('Command', () => {

  let abcStock: Stock = new Stock();
  let buyStockOrder: BuyStock = new BuyStock(abcStock);
  let sellStockOrder: SellStock = new SellStock(abcStock);
  let broker: Broker = new Broker();

  it('Should take buy stock order.', () => {
    broker.takeOrder(buyStockOrder);
    expect(broker.getOrders().length).toEqual(1);
  });

  it('Should take sell stock order.', () => {
    broker.takeOrder(sellStockOrder);
    expect(broker.getOrders().length).toEqual(2);
  });

  it('Should place stock orders.', () => {
    broker.placeOrders();
    expect(broker.getOrders().length).toEqual(0);
    expect(abcStock.isSold()).toEqual(true);
    expect(abcStock.isBought()).toEqual(true);
  });
});
