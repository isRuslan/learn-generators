Look sync. Do async.

## Info
Generators allows us to hide the **asynchronicity** as a implementation
detail and write synchronous-looking code. Example:

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
Here we read `exercises` directory to get list of directories inside,
`readdir` will not give us an immediate result, it requires callback
function as a second paramenter where where we can get the result.

But, we can improve it. Generators can **wait for readdir finishes** 

