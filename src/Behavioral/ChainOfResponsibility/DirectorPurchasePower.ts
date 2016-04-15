import {AbstractPurchasePower} from './AbstractPurchasePower';

import {PurchaseRequest} from './PurchaseRequest';

export class DirectorPurchasePower extends AbstractPurchasePower {

  private static ALLOWABLE = AbstractPurchasePower.BASE * 40;

  public processRequest(request: PurchaseRequest): void {
    if (request.getAmount() <= DirectorPurchasePower.ALLOWABLE) {
      request.setApprovedBy(this);
    } else if (this.successor !== null) {
      this.successor.processRequest(request);
    }
  }
}
