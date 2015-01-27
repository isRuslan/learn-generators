function *factorial (n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
    yield result;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}
