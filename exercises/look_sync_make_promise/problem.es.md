Parece sincrono. Construye una promesa.

## Información
Otra forma de escribr el codigo de `parece síncrono` es usando **Promesas**.

Similar a los **callbacks** de antes, podemos esperar a que una promesa se
resuelva y devolver ese resultado.

Tomemos el mismo ejemplo del **ejercicio con callbacks** - leyendo el directorio
**exercise**, pero con promesas:
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
  // casi el mismo generador utilizado en el ejercico con callbacks
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
Aquí definimos una funcion `readDir` que devuelve una promesa que obtiene el contenido del directorio.
Todo lo interesante ocurre en la funcion `run` - **lanzando la promesa `readDir`**,
esperando su resolución y luego continuando con la ejecución.

Como `run` hizo eso? Esta es tu tarea.

## Documentacion (inglés)
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.promisejs.org/

## Tarea

Escribe la funcion `run` que toma un generador como argumento, lo inicie y espere por la
**resolución de una promesa** `foo`. Usa la función `run` del **ejercicio con callback** como ejemplo.

**Sigue este modelo:**
```js
function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // escribe tu codigo aquí
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log(foo);
});
```
