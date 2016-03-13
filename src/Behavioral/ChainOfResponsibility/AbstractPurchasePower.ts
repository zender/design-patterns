import {PurchaseRequest} from "./PurchaseRequest";

export abstract class AbstractPurchasePower {

  protected static BASE: number = 500;

  protected successor: AbstractPurchasePower = null;

  public setSuccessor(successor: AbstractPurchasePower): void {
    this.successor = successor;
  }

  public abstract processRequest(request: PurchaseRequest): void;
}
