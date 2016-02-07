Look sync. Do async.

## Info
Generators allow us to hide the **asynchronicity** as an implementation
detail and write easy-reading, maintainable, synchronous-looking code.

Wat?

Generators can **pause their execution** while async calls complete.

For example, you want to read current directory with `fs.readdir(dir, cb)`
with no falling back to callback land:

```js
var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    it.next(result);
  }

  go();  
}

run(function* (done) {
  // read `learn-generators` exercises folder
  var exercises = yield fs.readdir('exercises', done);
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
Here we create a generator that stops and waits for `readdir` to finish.

The key to making this work is the `run` function. The flow in `run` is:

**1)** create new generator-iterator object (`it`);
**2)** define the `go` function, which calls `it.next`;
**3)** pass `go` to the new generator-iterator object;
**4)** run `go` once with no arguments to start the generator

In total `go` is called twice, once with no arguments (which starts the
generator's execution) and second with the results of the `fs` call
from the `yield`.

If this doesn't make sense try inserting `console.log` statements and try to
trace the execution flow of the program.

## Docs
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk
 
## Task
Add error handling to this boilerplate. Teach `run` to throw on exception and
catch that in generator. `firstFile` should be `null` if it doesn't exist.

**Follow this boilerplate:**

```js
var fs = require('fs');

function run (generator) {
  // improve `run` above
}

run(function* (done) {
  // catch exception
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  
  console.log(firstFile);
});
```
