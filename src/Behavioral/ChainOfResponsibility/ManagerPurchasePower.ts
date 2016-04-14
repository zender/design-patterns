import {AbstractPurchasePower} from './AbstractPurchasePower';
import {PurchaseRequest} from './PurchaseRequest';

export class ManagerPurchasePower extends AbstractPurchasePower {

  private static ALLOWABLE = AbstractPurchasePower.BASE * 20;

  public processRequest(request:PurchaseRequest):void {
    if (request.getAmount() <= ManagerPurchasePower.ALLOWABLE) {
      request.setApprovedBy(this);
    } else if (this.successor !== null) {
      this.successor.processRequest(request);
    }
  }
}
