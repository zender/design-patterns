import {AbstractPurchasePower} from './AbstractPurchasePower';
import {PurchaseRequest} from './PurchaseRequest';

export class PresidentPurchasePower extends AbstractPurchasePower {

  private static ALLOWABLE = AbstractPurchasePower.BASE * 60;

  public processRequest(request: PurchaseRequest): void {
    if(request.getAmount() <= PresidentPurchasePower.ALLOWABLE) {
      request.setApprovedBy(this);
    }
  }
}
