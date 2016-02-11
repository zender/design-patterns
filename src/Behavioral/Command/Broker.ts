import {OrderInterface} from "./OrderInterface";

export class Broker {

  private orderList: Array<OrderInterface> = new Array();

  public takeOrder(order: OrderInterface): void {
    this.orderList.push(order);
  }

  public getOrders(): Array<OrderInterface> {
    return this.orderList;
  }

  public placeOrders(): void {
    while (this.orderList.length > 0) {
      var order = this.orderList.pop();
      order.execute();
    }
  }
}
