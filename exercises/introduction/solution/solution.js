function* foo () {
  yield 1;
  yield 2;
}

console.log( foo().next() );
