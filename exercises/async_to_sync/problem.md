Look sync. Do async.

## Info
Generators allows us to hide the **asynchronicity** as a implementation
detail and write easy-reading, maintanable, synchronous-looking code.

Wat?

Generators can **pause their execution** while async calls complete.

For example, you want to read current directory with `fs.readdir(dir, cb)`
with no falling to callback land:

```js
var fs = require('fs');

function run (generator) {
  var it = generator(next);

  function next (err, result) {
    it.next(result);
  }

  next();  
}

run(function* (done) {
  var exercises = yield fs.readdir('exercises', done);
  console.log(exercises); // [ 'async_to_sync', ..., 'run_stop_run' ]
});

```
Here we run the generator that stops and wait `readdir` job. Then we passed `done`
as callback function that will run our generator when the job is complete.

But how does `done` know about our generator? How will it start him again?
Look at `run` wrapper. It is a little **thunk** that helps us to manage generators
flow control. How:
**1)** create new generator-iterator object;
**2)** create `next` (future `done`) function that will run the generator;
**3)** pass `next` inside new generator-iterator object;
**4)** start generator **once at the beginning**.

## Docs
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk
 
## Task
Add error handing to this boilerplate. Teach `run` to throw on exeption and
catch that in generator. `firstFile` should be `null` if dosen't exist.
```js
var fs = require('fs');

function run (generator) {
  // improve previous `run`
}

run(function* (done) {
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  
  console.log(firstFile);
});
```
