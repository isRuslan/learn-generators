Look sync. Make a promise.

## Info
Another way to code `look sync` is using **Promises**.

Similar to **callbacks** before, we can also wait for a promise to resolve
and yield that result.

Let's take the same example as in the **callback exercise** - reading the
**exercise** directory, but with promises:
```js
var fs = require('fs');

function readDir(dir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dir, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

run(function* () {
  // almost the same generator as in the callback exercise
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
Here we defined a `readDir` function that returns a promise with dir's contents.
All interesting stuff happens in the `run` function - we **yielded the
`readDir` promise**, waited for resolution and then continued.

How did `run` do that? This is your task.

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.promisejs.org/

## Task

Write `run` function that gets a generator as an argument, starts it and
yields **promise value** `foo`. Use `run` from **callback exercise** as a example.

**Follow this boilerplate:**
```js
function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // your code goes here
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log(foo);
});
```
