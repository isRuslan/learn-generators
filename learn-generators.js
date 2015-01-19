#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'learn-generators',
    title       : 'Learn Generators',
    subtitle    : 'An Intro to ES6 generators via a set of self-guided workshops.',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
