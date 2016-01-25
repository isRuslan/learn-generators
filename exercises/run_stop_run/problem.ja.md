ES6のGenerator関数とは

## 基礎知識
Generatorは実行中に中断と再開が何度もできる関数です。

例:

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'inside foo')
}
var G = foo();

console.log( G.next() );
// { value: 'woo', done: false }
console.log( G.next('bar') );
// 'bar', 'inside foo'
// { value: undefined, done: true }
```

プログラムはどういう動きをしたのでしょう？
いくつかの新たな注意点があります。

**1)** `*` - はfooがgeneratorであることを意味します。`function` キーワードと関数名の間であればどこに書いても構いません。

**2)** `yield` 式 - はgeneratorを停止し文字列 `woo` を返します。
これはgeneratorの状態を `next` が呼ばれるまで一旦停止しします。
 (以下の**3)**を参照).
generator `foo` に `next` メソッドから `bar` を送って再開するとその値が `foo` の内部の `yield` 式の戻り値になります。 
(さらにそれが変数 `stop` に代入されます).
 `実行 -> 停止 -> 実行` の間の全ての内部状態は保存されます。 

**3)** `foo` 関数は `next` メソッドを持ち、以下の様なオブジェクトを返します。
`{value: VALUE_FROM_YIELD, done: IS_THIS_FINISHED}`.

## ドキュメント
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 - http://wiki.ecmascript.org/doku.php?id=harmony:generators

## 課題

`range`というgenerator関数に引数**from**と**to**を渡してください。

**from**と**to**の範囲の数値を文字列として１行ずつプリントしてください。

**以下の雛形を参考にしてください**

```js
function *range(from, to) {
  // your code goes here
}

for (var r of range(5, 10)) {
    console.log( r );
}
// should print: 5, 6, 7, 8, 9, 10
```
