function *factorial (n) {
  var result = 1;
  while(n) {
    yield result; 
    result *= n;
    --n;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}
