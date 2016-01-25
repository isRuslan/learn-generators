Generatorでエラーをthrow/catchしてみましょう

## Info
generatorが最大の恩恵をもたらすのはその「同期能力」です。
generator関数の内部コードはたとえgenrator関数自体が非同期に実行されていても同期します。

すなわち`try {...} catch () {}`構文を簡単に使えるということです。


```js
function *dummy () {
  try {
    null.foo(); // 例外の発生
  } catch (e) {
    console.log('例外が発生しました: %s', e);
  }
  yield 'クラッシュしませんでした';
}
dummy().next();
// 例外が発生しました: TypeError: Cannot read property 'foo' of null
{ value: 'クラッシュしませんでした', done: false }
```

また、generator関数は`throw()`メソッドを持っているので、例外をgeneratorに渡すことができます。
すなわち`try-catch`を例外のキャッチのために関数内に記述できます。

注意: もしgenerator関数が`try-catch`を持っていなければ、例外はgenerator関数から投げられます。

```js
function *foo () { yield 'inside foo'; }

var it = foo();
try {
  it.throw('BOOO from outside');
} catch (errFromIt) {
  console.log('Error: %s ', errFromIt); // Error: BOOO from outside
}
```

## 課題
文字列の配列の要素全てを大文字にするgenerator関数 `upper` を作成してください。

**注意点**
数字が `upper` 関数に与えられるとエラーになることがあります。
それに対応するため、数字に対しては `null` を返してください。

**以下の雛形を参考にしてください**

```js
function *upper (items) {
  // your code goes here
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
```
