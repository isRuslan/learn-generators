同期のような非同期

## 基礎知識
ジェネレータにより実装時の**非同期性**を隠蔽できます。
その結果、読みやすく、保守しやすい同期処理のようなコードが書けます。

何故でしょう?

ジェネレータは非同期呼出しの実行中に**一時停止します**。

例えばカレントディレクトリを`fs.readdir(dir, cb)`で読込む場合もコールバックを使わずにすみます。

```js
var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    it.next(result);
  }

  go();  
}

run(function* (done) {
  // `learn-generators`のexercisesフォルダーを読み込む
  var exercises = yield fs.readdir('exercises', done);
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
このジェネレータは停止して`readdir`関数が終了するのを待ちます。

キーとなるのは`run`関数です。その流れは、

**1)** 新しいジェネレータ・イテレータオブジェクト(`it`)を生成します;
**2)** `it.next`を呼び出す`go`関数を定義します;
**3)** 新しいジェネレータ・イテレータオブジェクトに`go`を渡します;
**4)** ジェネレータを開始するために引数のない`go`関数を一度だけ実行します

結果的に`go`は２回呼び出されます。最初は引数なしで（これでジェネレータが開始されます）、
そして２回目は`yield`から呼び出されて`fs`の実行結果を返します。

理解を深めるためには`console.log`を追加してこのプログラムの実行の流れを
トレースすると良いでしょう。

## ドキュメント
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk
 
## 課題
以下の雛形にエラー処理を追加してください。`run` 関数に例外をthrowし
ジェネレータの中でそれをcatchするように修正してください。`firstFile`はもしディレクトリが
存在しなければ`null`を返すべきです。

**以下の雛形に従ってください。**

```js
var fs = require('fs');

function run (generator) {
  // 上記の`run`を改良します
}

run(function* (done) {
  // catch exception
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // 存在しないディレクトリを指定
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  
  console.log(firstFile);
});
```
