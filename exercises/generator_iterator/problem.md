Generators and Iterators. What's the difference?
for (var n of factorial(5)) {

## Info
The main thing we need to know is __generators are iterators__. 
They are just a wrapper of iterator object (see `iterator protocol` below).

Generators don't execute the first time they're called but instead
return an iterator object with a few methods (`send, next, throw, close`).

Iterator is a design pattern, where we run through a sequence one at time
by calling `next()`. On each `next()` we get next element from a sequence :)
a bit logical and already familiar for us.

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 - http://wiki.ecmascript.org/doku.php?id=harmony:iterators

## Task
Write a generator function `factorial` that get number to calculate
and iterate over it. Not a recursion. Loop-way.
**Follow this boilerplate:**
```js
function *factorial(n){
  // your code here
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 5, 20, 60, 120
```
