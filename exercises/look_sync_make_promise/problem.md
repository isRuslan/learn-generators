Look sync. Make a promise.

## Info
Another way to code `like a sync` - using **Promises**.
As a **callback** before, we can wait for the promise resolution and yield that result.

Let's take the same example as in **callback exercise** - read **exercise** directory,
but with promises:
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
  // almost the same generator as in callback exercise
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
Here we defined `readDir` function that returns a promise with dir's content.
All interesting stuff happens in `run` function - we **yielded `readDir` promise**,
wait for resolution and went further.
How did `run` do that? This is your task.

## Docs
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.promisejs.org/

## Task
Write `run` function that gets a generator as an argument, start it and
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
  var foo = yield aksFoo();
  console.log(foo);
});
```
