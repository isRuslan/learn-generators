var fs = require('fs');

function run (generator) {
  var it = generator(next);

  function go (err, result) {
    if (err) it.throw(err)
    it.next(result);
  }

  go(); 
}

run(function* (done) {
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  } catch (err) {
    var firstFile = null;
  }
  
  console.log(firstFile);
});
