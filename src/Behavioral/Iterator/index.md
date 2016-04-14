`Iterator`
=========

Description:
------------

Iterator pattern is very commonly used design pattern in Java and .Net programming environment. This pattern is used to get a way to access the elements of a collection object in sequential manner without any need to know its underlying representation.

Iterator pattern falls under behavioral pattern category.

Iterator example
![Iterator Sample](http://www.tutorialspoint.com/design_pattern/images/iterator_pattern_uml_diagram.jpg)

Implementation:
---------------

We're going to create a Iterator interface which narrates navigation method and a Container interface which retruns the iterator . Concrete classes implementing the Container interface will be responsible to implement Iterator interface and use it

IteratorPatternDemo, our demo class will use NamesRepository, a concrete class implementation to print a Names stored as a collection in NamesRepository.

Files:
------

[ContainerInterface](ContainerInterface.ts)

[IteratorInterface](IteratorInterface.ts)

[DemoIterator](DemoIterator.ts)

[DemoRepository](DemoRepository.ts)

[Demo](IteratorPatternDemo.spec.ts)

## Running tests

```bash
npm test
```