Introduction to ES6 Generators.

## Info
Generators are functions which can be stoped while a process
and run later, as many times, as you want. Example:

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'inside foo')
}
var G = foo();

console.log( G.next() ); // { value: 'woo', done: false }
console.log( G.next('bar') ); // 'bar', 'inside foo' { value: undefined, done: true }
```

What was that? You could noticed some new things.

**1)** `*` - just a sign that foo is generator. No matter where to
concat it: `function` keyword or the name of a function.

**2)** The `yield` expression - stop the generator and send out `woo` string.
And then, after restarting the generator (see **3)** below), we can send 'bar'
string in 'foo' which one will be result of `yield` expression.
Context between all `run->stop->run` will be saved.

**3)** `foo` function has `next` method that return object like
{value: VALUE_FROM_YIELD, done: IS_THIS_FINISHED}.

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 - http://wiki.ecmascript.org/doku.php?id=harmony:generators

## Task
Write a `range` generator-function that takes **from** and **to** arguments.
And run the numbers within the specified range.
**Follow this boilerplate:**
```js
function *range(from, to) {
  // your code goes here
}

for (var r of range(5, 10)) {
    console.log( r );
}
// 5, 6, 7, 8, 9, 10
```
