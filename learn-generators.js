#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')
      credits     = require('./credits')

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
