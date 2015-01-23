var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec   = require('workshopper-wrappedexec');
// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);
  
exercise = comparestdout(exercise)

exercise = wrappedexec(exercise);
exercise.wrapModule(require.resolve('./wrap'))

function rndport() {
    return 1024 + Math.floor(Math.random() * 64511);
}

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
    this.submissionPort = rndport();
    this.solutionPort = this.submissionPort + 1;

    //this.submissionArgs = [this.submissionPort];
    //this.solutionArgs = [this.solutionPort];
    
    this.submissionArgs.unshift(this.submissionPort);
    this.solutionArgs.unshift(this.solutionPort);
    
    this.submissionCommand = [ '--harmony', this.submission ].concat(this.submissionArgs);
    this.solutionCommand = [ '--harmony', this.solution ].concat(this.solutionArgs);

    process.nextTick(callback);
});
// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  var usedSync  = false
    , usedAsync = false

  Object.keys(exercise.wrapData || {}).forEach(function (m) {
    //if (/Sync$/.test(m)) {
      //usedSync = true
      //this.emit('pass', this.__('pass.sync', {method: 'fs.' + m + '()'}))
    //} else {
      //usedAsync = true
      //this.emit('fail', this.__('fail.async', {method: 'fs.' + m + '()'}))
    //}
  }.bind(this))

  callback(null, !usedAsync && usedSync)
})

module.exports = exercise;
