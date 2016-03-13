`Chain Of Responsibility`
===========================

Description:
------------

As the name suggests, the chain of responsibility pattern creates a chain of receiver objects for a request. 
This pattern decouples sender and receiver of a request based on type of request. 
This pattern comes under behavioral patterns.

In this pattern, normally each receiver contains reference to another receiver. 
If one object cannot handle the request then it passes the same to the next receiver and so on.

Implementation:
---------------

In this example we have different roles, each having a fixed purchasing limit and a successor. 
Every time a user in a role receives a purchase request that exceeds his or her limit, 
the request is passed to his or her successor.

The PurchasePower abstract class with the abstract method processRequest.

Files:
------

[AbstractPurchasePower](AbstractPurchasePower.ts)

[ManagerPurchasePower](ManagerPurchasePower.ts)

[DirectorPurchasePower](DirectorPurchasePower.ts)

[PresidentPurchasePower](PresidentPurchasePower.ts)

[PurchaseRequest](PurchaseRequest.ts)

[Demo](ChainPatternDemo.spec.ts)

## Running tests

```bash
npm test
```