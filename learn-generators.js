const workshopper   = require('workshopper'),
      path          = require('path'),
      credits       = require('./credits'),
      colors        = require('colors-tmpl')
      hasGenerators = require('has-generators')


function fpath (f) {
    return path.join(__dirname, f)
}

const learnGenerators = workshopper({
    name        : 'learn-generators',
    appDir      : __dirname,
    languages   : ['en', 'fr', 'ko', 'ru', 'ja'],
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
