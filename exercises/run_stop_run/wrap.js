var fs = require('fs');

function wrap (ctx) {
  var content = fs.readFileSync(ctx.mainProgram, 'utf-8');
  
  ctx.usedGenerators = false;
  
  if (/yield/.test(content)) {
    ctx.usedGenerators = true;
  }
}


module.exports = wrap
