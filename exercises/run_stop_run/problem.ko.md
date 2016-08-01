ES6 제너레이터의 소개

## 정보
제너레이터는 프로세스에서 한동안 멈추었다가 필요한 만큼 실행할 수 있는
함수입니다. 예를 들면,

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'inside foo');
}
var G = foo();

console.log( G.next() );
// { value: 'woo', done: false }
console.log( G.next('bar') );
// 'bar', 'inside foo'
// { value: undefined, done: true }
```

아시겠나요? 여기에는 몇 가지 새로운 점이 있습니다.

**1)** `*` - 그냥 foo가 제너레이터라는 표시입니다. `function` 키워드와 함수 이름
사이라면 어디든 넣을 수 있고, 어디에 넣든 상관없습니다.

**2)** `yield` 표현식 - 제너레이터를 멈추고 문자열 `woo`를 보냅니다.
이 구문은 `next`를 호출할 때까지 제너레이터의 상태를 멈춥니다.(밑의 **3)** 참고)
문자열 `bar`를 `foo`에 보내 제너레이터를 재시작했고 이는 `foo`안의 `yield`
표현식에 의해 반환됩니다.(이는 `stop`에 할당됩니다.) `run -> stop -> run` 사이의
모든 문맥은 저장됩니다.

**3)** `foo` 함수는 `{value: VALUE_FROM_YIELD, done: IS_THIS_FINISHED}` 같은
객체를 반환하는 `next` 메소드를 가집니다.

## 문서
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 - http://wiki.ecmascript.org/doku.php?id=harmony:generators

## 해야할 일

**from**, **to**를 인자로 받는 `range` 제너레이터 함수를 작성하세요.

지정된 범위의 숫자를 한 줄에 하나씩 문자열로 출력하세요.

**이 템플릿을 사용하세요.**

```js
function *range(from, to) {
  // 여기에 코드를 넣으세요
}

for (var r of range(5, 10)) {
    console.log( r );
}
// 5, 6, 7, 8, 9, 10을 출력해야 합니다
```
