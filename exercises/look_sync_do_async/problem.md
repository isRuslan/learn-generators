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

function run (generatorFunction) {
  console.log('  2. perform this generatorFunction with a callback function `done`');

  var generator = generatorFunction(done);
  function done (err, result) {
    // if else is for seperate the first call of done and the second call of done
    // first call in function `run` without any argument.
    // second call fs.readdir's callback with tow arguments.
    if (!err && !result) console.log('  3. call generator.next to start the generator');
    else console.log('      5. after `fs.readdir` read, call generator.next with reddir\' result');

    generator.next(result);
  }

  // we can replace `done()` with `generator.next()`, so the content in this generatorFunction will start to execute.
  // generator.next();
  done();
}

console.log('1. perform `run` with a generatorFunction which take a callback function `done` as it\'s argument.');
run(function* (done) {
  console.log('    4. execute `fs.readdir` with callback function `done`.' +
  'The generatorFunction will pause here till `generator.next` is called.');
  var files = yield fs.readdir(__dirname, done);
  console.log('        6. because we push reddir\'s result back through generator.next, we got all the files');
  console.log(files); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
Here we run the generator that stops and wait `readdir` job. Then we passed `done`
as callback function that will run our generator when the job is complete.

But how does `done` know about our generator? How will it start him again?
Look at `run` wrapper. It is a little **thunk** that helps us to manage generators
flow control. How:
**1)** create new generator-iterator object;
**2)** create `go` (future `done`) function that will run the generator;
**3)** pass `go` inside new generator-iterator object;
**4)** start generator **once at the beginning**.

## Docs
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk

## Task
Add error handing to this boilerplate. Teach `run` to throw on exeption and
catch that in generator. `firstFile` should be `null` if it dosen't exist.
**Follow this boilerplate:**
```js
var fs = require('fs');

function run (generator) {
  // improve `run` above
}

run(function* (done) {
  // catch exeption
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined

  console.log(firstFile);
});
```
