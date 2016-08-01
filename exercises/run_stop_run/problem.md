Introduction to ES6 Generators.

## Info
Generators are functions which can be stopped while in process
and run later as many times as you want. Example:

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'inside foo');
}
var G = foo();

console.log( G.next() );
// { value: 'woo', done: false }
console.log( G.next('bar') );
// 'bar', 'inside foo'
// { value: undefined, done: true }
```

What was that? There are some new things to notice:

**1)** `*` - just a sign that foo is generator. You can put it anywhere between
the `function` keyword and the function name, it does not matter exactly where.

**2)** The `yield` expression - stop the generator and send out `woo` string.
This pauses the state of the generator until we call `next` (see **3)** below).
We restart the generator by sending `bar` string into `foo` which becomes the
value returned by the `yield` expression inside `foo` (which gets assigned
to `stop`). Context between all `run -> stop -> run` will be saved.

**3)** `foo` function has `next` method that returns an object like
`{value: VALUE_FROM_YIELD, done: IS_THIS_FINISHED}`.

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 - http://wiki.ecmascript.org/doku.php?id=harmony:generators

## Task

Write a `range` generator-function that takes **from** and **to** arguments.

Print the numbers as strings within the specified range, one per line.

**Follow this boilerplate:**

```js
function *range(from, to) {
  // your code goes here
}

for (var r of range(5, 10)) {
    console.log( r );
}
// should print: 5, 6, 7, 8, 9, 10
```
