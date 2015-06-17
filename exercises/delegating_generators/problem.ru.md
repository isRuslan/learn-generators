Генераторы внутри генераторов.

## Теория
Мы можем передавать управление процессом итерации от нашего генератора
к другому. В этом нам поможет выражение `yield * expression`, `*` означает,
что **expression** является генератором и мы можем передать ему управление.

```js
function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // передаем управление
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3
```

## Справка
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

## Задача
Реализуйте функцию-генератор `flat` принимает вложенный массив и выравнивает его. 

**Шаблон решения:**

```js
function *flat (arr) {
  // ваш код здесь
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
```
