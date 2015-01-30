#!/usr/bin/env node --harmony

const workshopper   = require('workshopper'),
      path          = require('path'),
      credits       = require('./credits'),
      colors        = require('colors-tmpl')
      hasGenerators = require('has-generators')


function fpath (f) {
    return path.join(__dirname, f)
}

var learnGenerators = workshopper({
    name        : 'learn-generators',
    appDir      : __dirname,
    languages   : ['en'],
    menuItems   : [{
        name : 'credits',
        handler : credits
    }],
    exerciseDir : fpath('./exercises/')
})

if (!hasGenerators) {
  console.error(colors(learnGenerators.__('error.has_generators')))
  process.exit()
}
