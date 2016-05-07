PROMISEで同期処理のように

## 基礎知識
`同期処理のような`コーディングのもう一つの方法は**Promise**を使うことです。

前述の**コールバック**と同様に処理を決定するためのPromiseを待つことでその
処理結果を得ることができます。

**コールバックの練習問題**と同じ例を用いて**exercise**ディレクトリを
Promiseを使って読み込んでください:
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
  // コールバックの練習問題と殆ど同じジェネレータ
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
ここに定義した`readDir`関数はそのディレクトリの内容を持ったPromiseを返します。
全ての興味深いことは`run`関数の中で発生します。 それは
**`readDir`のPromiseを生成**して, 結果を得ては継続することを繰り返します。

そのような`run`関数をどのように書けば良いでしょう？それが課題です。

## ドキュメント
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.promisejs.org/

## 課題

ジェネレータを１つの引数として、それを開始し**Promise値**`foo`を生成する`run`関数を作成してください。
**コールバックの練習問題**の`run`を例として用いてください。

**以下の雛形に従ってください。**
```js
function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // ここにコードを書いてください
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log(foo);
});
```
