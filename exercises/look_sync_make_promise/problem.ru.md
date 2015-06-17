Look sync. Make a promise.

## Теория
Есть еще один путь писать `синхронно-выглядящий` код - это **Promises**.

Так же, как и **callbacks** в предыдущем задании, мы можем подождать, пока
promise вернет результат и вернуть его из генератора.

Давайте попробуем реализовать пример из предыдущего задания - прочитаем 
директорию **exercise**, но уже с использованием promise.

```js
var fs = require('fs');

function readDir(dir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dir, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

run(function* () {
  // практически та же самая функция-генератор
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
В этом примере мы определили функцию `readDir` которая возвращает promise с
содержимым переданной ей директории. Но самая интересная часть происходит в
функции `run`, где мы подождали исполнение **`readDir` promise**, получили результат
и продолжили работу.

Каким образом `run` сделала это? Это и есть ваше задание.

## Справка
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.promisejs.org/

## Задание

Реализуйте функцию `run`, которая принимает функцию-генератор в качестве аргумента, 
запускает ее и возвращает **результат promise** `foo`. Используйте `run` из 
предыдущего задания в качестве примера.

**Шаблон решения:**
```js
function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // ваш код здесь
}

run(function* () {
  // обработка ошибок?
  var foo = yield askFoo();
  console.log(foo);
});
```
