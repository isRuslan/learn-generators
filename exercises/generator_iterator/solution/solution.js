// F(5) = 1*2*3*4*5;
// F(n) = n*(n-1)*(n-2)*(n-n)
function *factorial (n) {
  var result = 1;
  while(n) {
    yield result; 
    result *= n;
    --n;
  }
}

var F = factorial(5);
for (var n of F) {
  console.log(n)
}
