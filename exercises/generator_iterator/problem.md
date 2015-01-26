Generators and Iterators. What's the difference?

## Info
The main thing we need to know is __generators are iterators__. 
They are just a wrapper of an iterator object (see `iterator protocol` below).

Generators don't execute the first time they're called but instead
return an iterator object with a few methods (`send, next, throw, close`).

Iterator is a design pattern, where we run through a sequence one at time
by calling `next()`. On each `next()` we get next element from a sequence :)
A bit logical and already familiar for us.

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 - http://wiki.ecmascript.org/doku.php?id=harmony:iterators

## Task

Write a generator function `factorial` that, given an input number, starts at 1 and goes
up to the number, yielding the factorial of each number along the way.

Don't use recursion. Use a loop.

**Follow this boilerplate:**
```js
function *factorial(n){
  // your code here
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120 
```
