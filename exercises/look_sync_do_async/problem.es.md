Parece síncrono. Hazlo asíncrono.

## Información
Los generadores nos permiten esconder la **asincronisidad** como un detalle
de implementacion y escribir codigo fácil de leer, mantenible y que parezca síncrono.

Que?

Los generadores pueden **pausar su ejecución** mientras las llamadas asíncronas se completan.

Por ejemplo, si quieres leer el directorio actual con `fs.readdir(dir, cb)`
sin volver a caer en la tierra de los callbacks:

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
  // read `learn-generators` exercises folder
  var exercises = yield fs.readdir('exercises', done);
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});

```
Aquí creamos un generador que se detiene y espera por `readdir` para finalizar.

La clave para que esto funcione es la función `run`. El orden de ejecución de `fun` es:

**1)** Crear un nuevo objeto generador-iterador (`it`);
**2)** definir la function `go`, que llama a `it.next`;
**3)** pasar `go` al nuevo objeto generador-iterador;
**4)** correr `go` una vez sin argumentos para iniciar el generador

En total, `go` se llama dos veces, una sin argumentos (que inicia la ejecución
del generador) y una segunda vez con el resultado de la llamada de `fs` desde el
`yield`.

Si esto parece no tener sentido, incluye algunos `console.log` al código e intenta
seguir el flujo de ejecución del programa.

## Documentación (inglés)
 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk

## Tarea
Agrega manejo de errores a este ejemplo. Dile a `run` que dispare una excepción y
capture a esta en un generador. `firstFile` debe ser `null` si este no existe.

**Sigue este modelo:**

```js
var fs = require('fs');

function run (generator) {
  // improve `run` above
}

run(function* (done) {
  // catch exception
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined

  console.log(firstFile);
});
```
