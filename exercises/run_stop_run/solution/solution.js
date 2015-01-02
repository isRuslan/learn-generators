function *addTwoGenerator (value) {
  var to = value;
  while( true ) {
    to+=2;
    yield to;
  }
}

var addTwo = addTwoGenerator(10);
console.log(addTwo.next().value);
console.log(addTwo.next().value);
