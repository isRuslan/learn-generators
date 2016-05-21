Generadores e Iteradores. Cual es la diferencia?

## Información
Lo mas importante que debemos saber es que los __generadores son iteradores__.
Estos son simplemente un wrapper alrededor de un objeto iterador (mira `protocolo iterador` debajo).

Los generadores no se ejecutan la primera vez que son llamados, en vez de esto,
devuelven un objeto iterador con algunos métodos (`send, next, throw, close`).

Un iterador es un patrón de diseño, que nosotros corremos a traves de una secuencia
paso a paso llamando al método `next()`. Cada vez que llamamos a `next()` obtenemos el siguiente
elemento de una secuencia :)
Algo lógico y ya familiar para nosotros.

## Documentación (Inglés)
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 - http://wiki.ecmascript.org/doku.php?id=harmony:iterators

## Tarea

Escribe una función generadora `factorial` que, recibiendo un número, inicia en 1
y termina en el número ingresado, deteniendose en el factorial de cada número intermedio.

No uses recursión. Utiliza un bucle.

**Sigue este modelo:**
```js
function *factorial(n){
  // escribe tu código aquí
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120
```
