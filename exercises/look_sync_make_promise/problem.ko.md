동기로 보고, 프라미스 만들기.

## 정보
`동기처럼 보이게`하는 다른 방법은 **프라미스**를 사용하는 것입니다.

이전 **콜백**과 비슷하지만, 프라미스도 결과를 기다리게 할 수 있고 결과를 yield할
수 있습니다.

**콜백 연습문제**와 같은 예제를 보겠습니다. **exercise** 디렉터리를 읽지만
이번엔 프라미스입니다.
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
  // 콜백 연습문제와 거의 같은 제너레이터
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
프라미스로 디렉터리의 내용을 반환하는 `readDir` 함수를 정의했습니다.
중요한 일은 모두 `run` 함수에서 일어나죠. `readDir` 프라미스를 yield하고, 결과를
기다려 진행합니다.

`run`이 어떻게 그렇게 했을까요? 그것이 이번 과제입니다.

## 문서
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.promisejs.org/

## 해야할 일

제너레이터를 인자로 받는 `run` 함수를 작성하세요. 제너레이터를 시작하고
**프라미스 값** `foo`를 yield하세요. `run`은 **콜백 연습문제**에서 사용했던 것을
참고하세요.

**이 템플릿을 사용하세요.**
```js
function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // 여기에 코드를 넣으세요
}

run(function* () {
  // 에러 처리 추가
  var foo = yield askFoo();
  console.log(foo);
});
```
