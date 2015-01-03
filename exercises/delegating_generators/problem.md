Generator inside generator.

## Info
We can delegate iteration control from our generator to another one.
`yield *` keyword will help us, `*` also means that yield expression
is a generator, so we can send message to inside generator too.

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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

## Task
Write a generator function that following this rules:
 - iterates **5 times** through [1..5] sequence;
 - return index of each step (1,2,3,4,5);
 - uses **maximum 2 yield** keyword.
**Follow this boilerplate:**
function *bar () {
  // your code goes here  
}
for (var i of bar()) {
    console.log( i );
}
// 1 2 3 4 5


