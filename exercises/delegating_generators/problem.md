Generators inside generators.

## Info
We can delegate iteration control from our generator to another one.
`yield * expression` will do the trick, `*` means that **expression**
is a generator too, so we can send message to it.

```js
function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // delegate foo
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3
```

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

## Task
Write generator-function `flat` that takes nested array inside and flattens it.

**Follow this boilerplate:**

```js
function *flat () {
  // your code goes here  
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
```
