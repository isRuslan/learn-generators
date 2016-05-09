ジェネレータの中のジェネレータ

## 基礎知識
反復の制御をジェネレータの中から他のジェネレータに委任することができます。
`yield * 式` と記述すると `*`**式**もジェネレータになり、それにメッセージを送ることができます。

```js
function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // delegate foo
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3
```

## ドキュメント
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

## 課題
ジェネレータ関数`flat`を作成してください。
関数は入れ子になった配列を受取り、それらの全要素を順番に展開します。

**以下の雛形を参考にしてください**

```js
function *flat (arr) {
  // ここにコードを書きます  
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
```
