Look sync. Do async.

## Info
Generators allows us to hide the **asynchronicity** as a implementation
detail and write easy-reading, maintanable,  synchronous-looking code.

Generators can *pause their execution** while async calls complete.

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
Here we run generator that stops to wait `readdir` job and run when it is complete.



## Docs
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
