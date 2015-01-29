#!/usr/bin/env node

const workshopper   = require('workshopper'),
      path          = require('path'),
      credits       = require('./credits'),
      hasGenerators = require('has-generators')

if(!hasGenerators) {
  console.error('You need nodejs >= 0.11.x or iojs >= 1.0.x to work with generators.')
  process.exit()
}

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'learn-generators',
    appDir      : __dirname,
    languages   : ['en'],
    menuItems   : [{
        name : 'credits',
        handler : credits
    }],
    exerciseDir : fpath('./exercises/')
})
