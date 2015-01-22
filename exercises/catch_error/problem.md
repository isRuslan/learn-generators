Try to throw/catch error with generators.

## Info
The best thing generators bring to us is **synchronicity**. The code inside
generator function is synchronous, even if we iterate generator asynchronously.

That means we can use `try {...} catch () {}` statements easily.

```js
function *dummy () {
  try {
    null.func(); // mmm...
  } catch (e) {
    console.log('Caught exepction: %s', e);
  }
  yield 'You can get me.';
}
dummy().next();
// Caught exepction: TypeError: Cannot read property 'func' of null
{ value: 'You can get me.', done: false }
```

Also, generator function has `throw()` method, that allows you to send to generator
an exeption. And `try-catch ` inside function will get that exeption correctly. 

Note: if generator dosen't have any `try-catch` statement, exeption
will just send out of generator:

```js
function *foo () { yield 'inside foo'; }

var it = foo();
try {
  it.throw('BOOO from outside');
}
catch (errFromIt) {
    console.log('Error: %s ', errFromIt); // Error: BOOO from outside
}
```

## Task
Write a generator-function `upper` that takes an array of string and
yield to upper case each of them.
**The problem:** some person sent a number into the `upper` and it's broken.
Please, fix it. If `upper` got a number it should return `null`.
**Follow this boilerplate**
```js
function *upper (items) {
  // your code goes here
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
```
