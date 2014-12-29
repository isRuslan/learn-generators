var execSync = require('child_process').execSync;
var assert = require('assert');
var glob = require('glob');
var path = require('path');
var fs = require('fs');

var files = glob.sync('exercises/*/solution/solution.js');

files.forEach(function (file) {
  // check verify output include solution file
  var v = execSync('./demo-workshopper.js verify ' + file).toString();
  var solution = fs.readFileSync(file, 'utf8');
  assert(v.replace(/\s*/g, '').indexOf(solution.replace(/\s*/g, '')) >= 0);
});
