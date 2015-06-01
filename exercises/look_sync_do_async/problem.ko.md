동기로 보고, 비동기로 하기.

## 정보
제너레이터를 사용하면 구현할 때 비동시성을 숨겨 읽기 쉽고, 유지보수하기 쉽고
동기처럼 보이게 할 수 있습니다.

뭐?

제너레이터는 비동기 호출이 완료될 때까지 **실행을 중단**할 수 있습니다.

예를 들면 현재 디렉터리를 `fs.readdir(dir, cb)`로 읽고 싶은 경우, 콜백을
사용하지 않고도 구현할 수 있습니다.

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
  // `learn-generators` 연습문제 폴더 읽기
  var exercises = yield fs.readdir('exercises', done);
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
`readdir`이 끝나기를 멈춰 기다리는 제너레이터를 만들었습니다.

이것을 가능하게 하는 핵심은 `run` 함수입니다. `run`의 흐름은 이렇습니다.

**1)** 새로운 제너레이터 이터레이터 객체를 생성(`it`)
**2)** `it.next`를 호출하는 `go` 함수를 정의
**3)** `go`에 새로운 이터레이터 제너레이터 객체를 넘김
**4)** 제너레이터를 시작하기 위해 `go`를 인자 없이 한 번 실행

최종적으로 `go`는 첫 번째는 인자 없이(이는 제너레이터의 실행을
시작합니다), 두 번째는 `yield`에서 `fs` 호출을 결과로 두 번 불리게 됩니다.

이해가 되지 않는다면, `console.log` 구문을 넣어 프로그램의 실행 흐름을 따라가
보세요.

## 문서
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk

## 해야할 일
템플릿에 에러 처리를 넣으세요. `run`에게 예외를 던지게 하고 제너레이터에서
잡으세요. `firstFile`은 존재하지 않을 경우 `null`이 되어야 합니다.

**이 템플릿을 사용하세요.**

```js
var fs = require('fs');

function run (generator) {
  // 위에 있는 `run`을 개선
}

run(function* (done) {
  // 예외 잡기
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // 그런 디렉터리 없음
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined

  console.log(firstFile);
});
```
