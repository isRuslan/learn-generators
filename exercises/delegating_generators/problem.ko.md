제너레이터 안의 제너레이터.

## 정보
제너레이터에서 다른 제너레이터로 이터레이션 제어를 위임할 수 있습니다.
`yield * 표현식`으로 이것을 할 수 있습니다. `*`는 그 **표현식**도
제너레이터라는 의미입니다. 그래서 표현식에 메시지를 보낼 수 있죠.

```js
function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // foo에 위임
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3
```

## 문서
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

## 해야할 일
중첩된 배열을 평탄화하는 제너레이터 함수 `flat`을 작성하세요.

**이 템플릿을 사용하세요.**

```js
function *flat (arr) {
  // 여기에 코드를 넣으세요
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
```
