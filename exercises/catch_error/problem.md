Try to throw/catch error with generators.

## Info
The best thing generators bring to us is **synchronicity**. The code inside
generator function is synchronous, even if we iterate generator asynchronously.

That means we can use `try {...} catch () {}` statements easily.

```js
function *dummy () {
  try {
    null.func(); // mmm...
    yield 'you will never see me';
  } catch (e) {
    console.log('Caught exepction: %s', e);
  }
}
dummy().next();
// Caught exepction: TypeError: Cannot read property 'func' of null
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
