제너레이터와 이터레이터는 뭐가 다를까요?

## 정보
가장 중요한 것은 __제너레이터는 이터레이터__라는 것입니다.
제너레이터는 이터레이터 객체의 래퍼일 뿐입니다.(밑의 `iterator protocol` 참조)

제너레이터는 처음 불렸을 때 실행되지 않지만 몇 가지 메소드(`send, next, throw,
close`)를 가지는 이터레이터 객체를 반환합니다.

이터레이터는 `next()`를 호출해서 시퀀스를 한 번에 하나씩 실행하는 디자인
패턴입니다. :)
조금 논리적이고 우리에게 이미 친숙하죠.

## 문서
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 - http://wiki.ecmascript.org/doku.php?id=harmony:iterators

## 해야할 일

숫자를 입력하면, 1부터 시작해 주어진 숫자까지 팩토리얼을 yield하는 `factorial`
제너레이터 함수를 작성하세요.

재귀를 사용하지 말고 반복을 사용하세요.

**이 템플릿을 사용하세요.**
```js
function *factorial(n){
  // 여기에 코드를 넣으세요
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120
```
