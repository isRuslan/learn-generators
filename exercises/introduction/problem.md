Introduction to ES6 Generators.

Generators are functions which can be stoped while a process
and run later, as many times, as you want.

function *foo () {
  yield 'woo';
}
var G = foo();
console.log(foo().next()); // { value: 'woo', done: false }
console.log(foo().next()); // { value: undefined, done: true }

What was that? You could noticed some new things.
First, `*` - just a sign that foo is generator.
Second, `yield` expression - stop function and return `value`.
Third, `foo` function has `next` method that return object like
{value: VALUE_FROM_YIELD, done: IS_THIS_FINISHED}
Context between all `run->stop->run` will be saved.


Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

