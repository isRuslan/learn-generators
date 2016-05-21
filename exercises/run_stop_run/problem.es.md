Introducción a los Generadores ES6.

## Información
Los generadores son funciones que pueden ser detenidas mientras están
ejecutándose y correrse luego tantas veces como tu quieras. Un ejemplo:

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'dentro de foo')
}
var G = foo();

console.log( G.next() );
// { value: 'woo', done: false }
console.log( G.next('bar') );
// 'bar', 'dentro de foo'
// { value: undefined, done: true }
```

Que es eso? Hay algunas cosas nuevas que hay que ver:

**1)** `*` - es solo una señal de que foo es una función generadora. Puedes ponerlo en cualquier
lugar entre la palabra clave `function` y el nombre mismo de la función, no importa
donde exactamente.

**2)** La expresión `yield` - detiene el generador y devuelve el string `woo`.
Esto pausea el estado del generador hasta que llamamos a `next` (mira **3** debajo).
Reiniciamos el generador enviando el string `bar` a `foo` que convierte el valor
devuelto por la expression `yield` dentro de `foo` (el cual se asigna a `stop`).
El contexto entre todos los `run -> stop -> run` se guardará.

**3)** La función `foo` posee el método `next` que devuelve un objeto de la forma
`{value: VALOR_DE_YIELD, done: SI_FINALIZO}`.

## Documentación (inglés)
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 - http://wiki.ecmascript.org/doku.php?id=harmony:generators

## Tarea

Escribe una función-generadora `range` que tiene como argumentos **from** y **to**.

Muestra los números entre los valores especificados como strings, uno por línea.

**Sigue este modelo:**

```js
function *range(from, to) {
  // escribe tu código aquí
}

for (var r of range(5, 10)) {
    console.log( r );
}
// debe imprimir: 5, 6, 7, 8, 9, 10
```
