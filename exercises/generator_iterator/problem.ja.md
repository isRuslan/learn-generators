ジェネレータとイテレータ. 何が違うのか?

## 基礎知識
まず知っておくべきことは __ジェネレータはイテレータである__ということです。 
ジェネレータはイテレータオブジェクトのラッパーにすぎません。(以下の`イテレータプロトコル`参照)

ジェネレータは最初に呼び出された時は何も実行せずに幾つかのメソッド(`send, next, throw, close`)を持つイテレータオブジェクトを返します。

イテレータは一つのデザインパターンであり、配列要素を一つずつ`next()`メソッドを呼び出して移動します。
一つの`next()`メソッド呼び出しによって配列の次の要素を取得します。
論理的で馴染みのあるパターンです。

## ドキュメント
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 - http://wiki.ecmascript.org/doku.php?id=harmony:iterators

## 課題

ジェネレーター関数`factorial`を作成してください。
入力は数値Nであり1から始めてNの階乗までのN個の数値を計算して返します。

再帰呼出しは使わずにループを使ってください。

**以下の雛形を参考にしてください**
```js
function *factorial(n){
  // ここにコードを書きます
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120 
```
