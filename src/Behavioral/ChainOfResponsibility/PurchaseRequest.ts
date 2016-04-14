import {AbstractPurchasePower} from './AbstractPurchasePower';

export class PurchaseRequest {

  protected approvedBy:AbstractPurchasePower = null;

  public constructor(protected amount:number) {
  }

  public getAmount():number {
    return this.amount;
  }

  public setApprovedBy(approvedBy:AbstractPurchasePower):void {
    this.approvedBy = approvedBy;
  }

  public getApprovedBy():AbstractPurchasePower {
    return this.approvedBy;
  }
}
