function *upper (items) {
  for (var i in items) {
    try {
      yield items[i].toUpperCase();
    } catch (e) {
      yield null;  
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
