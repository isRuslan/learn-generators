Try to throw/catch errors with generators.

## Info
The best thing generators bring to us is **synchronicity**. The code inside
generator functions is synchronous, even if we iterate generators asynchronously.

This means that we can use `try {...} catch () {}` statements easily.

```js
function *dummy () {
  try {
    null.foo(); // causes exception
  } catch (e) {
    console.log('Caught exception: %s', e);
  }
  yield 'Got here without crashing.';
}
dummy().next();
// Caught exception: TypeError: Cannot read property 'foo' of null
{ value: 'Got here without crashing.', done: false }
```

Also, generator functions have a `throw()` method which allows you to
pass an exception to a generator, causing `try-catch` inside the generator
to catch the exception.

Note: if the generator doesn't have any `try-catch` statements, the exception
will be just sent from the generator:

```js
function *foo () { yield 'inside foo'; }

var it = foo();
try {
  it.throw('BOOO from outside');
} catch (errFromIt) {
  console.log('Error: %s ', errFromIt); // Error: BOOO from outside
}
```

## Task
Write a generator-function `upper` that takes an array of strings and
yields each of them in upper case.

**The problem:** some person sent a number into the `upper` and it's broken.
Please fix it. If `upper` gets a number it should return `null`.

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
