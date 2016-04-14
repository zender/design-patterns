import {
  describe,
  it,
  expect,
} from 'angular2/testing';

import {AbstractPurchasePower} from './AbstractPurchasePower';
import {ManagerPurchasePower} from './ManagerPurchasePower';
import {DirectorPurchasePower} from './DirectorPurchasePower';
import {PresidentPurchasePower} from './PresidentPurchasePower';
import {PurchaseRequest} from './PurchaseRequest';

function getInitiator() {

  let manager:AbstractPurchasePower = new ManagerPurchasePower();
  let director:AbstractPurchasePower = new DirectorPurchasePower();
  let president:AbstractPurchasePower = new PresidentPurchasePower();

  manager.setSuccessor(director);
  director.setSuccessor(president);

  return manager;
}

export function main() {
  describe('ChainOfResponsibility', () => {

    let initiator:AbstractPurchasePower = getInitiator();

    it('Should be approved by manager', () => {
      let request = new PurchaseRequest(8000);
      initiator.processRequest(request);
      expect(request.getApprovedBy() instanceof ManagerPurchasePower).toEqual(true);
    });

    it('Should be approved by director', () => {
      let request = new PurchaseRequest(16000);
      initiator.processRequest(request);
      expect(request.getApprovedBy() instanceof DirectorPurchasePower).toEqual(true);
    });

    it('Should be approved by president', () => {
      let request = new PurchaseRequest(26000);
      initiator.processRequest(request);
      expect(request.getApprovedBy() instanceof PresidentPurchasePower).toEqual(true);
    });

    it('Should be not approved', () => {
      let request = new PurchaseRequest(50000);
      initiator.processRequest(request);
      expect(request.getApprovedBy()).toBeNull();
    });
  });
}


