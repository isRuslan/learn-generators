function wrap (ctx) {
console.log(ctx.$captureStack('yield'))
  var map = Array.prototype.map

  ctx.usedMap = false

  Array.prototype.map = function () {

    // $captureStack is a utility to capture a stacktrace array
    var stack = ctx.$captureStack(Array.prototype.map)
    // inspect the first callsite of the stacktrace and see if the
    // filename matches the mainProgram we're running, if so, then
    // the user has used Array#map!
    // the substring() is necessary as the user doesn't have to provide
    // a .js extension to make it work

    if (stack[0].getFileName().substring(0, ctx.mainProgram.length) == ctx.mainProgram)
      ctx.usedMap = true

    // call the real Array#map

    return map.apply(this, arguments)
  }
}


module.exports = wrap
