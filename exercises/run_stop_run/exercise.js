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
  var usedGenerators = exercise.wrapData.usedGenerators;
  
  !usedGenerators && this.emit('fail', 'Seems like you haven\'t used generators %(');
    
  callback(null, usedGenerators);
})

module.exports = exercise;
