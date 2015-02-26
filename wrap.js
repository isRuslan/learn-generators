var fs = require('fs');

function wrap (ctx) {
  var submissionContent = fs.readFileSync(ctx.mainProgram, 'utf-8');

  // http://upshots.org/javascript/javascript-regexp-to-remove-comments
  submissionContent = submissionContent.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '');

  ctx.usedGenerators = false;

  // just check `yield`, sorry
  if (/yield/.test(submissionContent)) {
    ctx.usedGenerators = true;
  }
}


module.exports = wrap
