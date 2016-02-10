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

We have created an abstract class AbstractLogger with a level of logging. Then we have created three types of loggers extending 
the AbstractLogger. Each logger checks the level of message to its level and print accordingly otherwise does not print 
and pass the message to its next logger.

[more](http://www.tutorialspoint.com/design_pattern/chain_of_responsibility_pattern.htm)

Files:
------

[AbstractLogger](AbstractLogger.ts)

[ConsoleLogger](ConsoleLogger.ts)

[ErrorLogger](ErrorLogger.ts)

[FileLogger](FileLogger.ts)

[Demo](ChainPatternDemo.spec.ts)

## Running tests

```bash
npm test
```