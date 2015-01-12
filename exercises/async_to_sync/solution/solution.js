function *addTwo (value) {
  var to = value;
  while( true ) {
    to+=2;
    yield to;
  }
}

var adder = addTwo(10);
console.log(adder.next().value);
console.log(adder.next().value);
