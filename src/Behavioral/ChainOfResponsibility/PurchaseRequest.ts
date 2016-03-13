import {AbstractPurchasePower} from "./AbstractPurchasePower";
export class PurchaseRequest {

  protected amount: number = 0.0;

  protected approvedBy: AbstractPurchasePower = null;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setApprovedBy(approvedBy: AbstractPurchasePower): void {
    this.approvedBy = approvedBy;
  }

  public getApprovedBy(): AbstractPurchasePower {
    return this.approvedBy;
  }
}
