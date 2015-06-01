제너레이터에서 에러를 일으키고 잡아봅시다.

## 정보
제너레이터가 주는 가장 큰 이점은 **동시성**입니다. 이터레이터 제너레이터가
비동기라고 해도 제너레이터 함수 안의 코드는 동기입니다.

이 말은 `try {...} catch () {}` 구문을 쉽게 사용할 수 있다는 뜻입니다.

```js
function *dummy () {
  try {
    null.foo(); // 예외 발생
  } catch (e) {
    console.log('Caught exception: %s', e);
  }
  yield 'Got here without crashing.';
}
dummy().next();
// Caught exception: TypeError: Cannot read property 'foo' of null
{ value: 'Got here without crashing.', done: false }
```

또, 제너레이터 함수는 제너레이터에 예외를 전달할 수 있게 하는 `throw()` 메소드를
가지고 있습니다. 예외를 잡으려면 제너레이터 안의 `try-catch`에서 발생시키면
됩니다.

주의: 제너레이터가 `try-catch` 구문을 가지고 있지 않다면, 예외는 그냥
제너레이터에서 발생합니다.

```js
function *foo () { yield 'inside foo'; }

var it = foo();
try {
  it.throw('BOOO from outside');
} catch (errFromIt) {
  console.log('Error: %s ', errFromIt); // Error: BOOO from outside
}
```

## 해야할 일
문자열의 배열을 받아 각각 대문자로 바꿔 yield하는 제너레이터 함수 `upper`를
작성하세요.

**문제:** 어떤 사람은 `upper`에 숫자를 넣어 오류가 납니다.
고쳐주세요. `upper`가 숫자를 받으면 `null`을 반환해야 합니다.

**이 템플릿을 사용하세요.**

```js
function *upper (items) {
  // 여기에 코드를 넣으세요
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// A, B, null, C가 출력되야 합니다
```
