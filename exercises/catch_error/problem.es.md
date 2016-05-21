Intentar lanzar/capturar erroes con generadores.

## Información
Lo mejor que los generadores nos brindan es la **sincronicidad**. El código dentro
de una función generadora es síncrono, incluso si iteramos generadores de forma asíncrona.

Esto quiere decir que podemos usar bloques `try {...} catch () {}` facílmente.

```js
function *dummy () {
  try {
    null.foo(); // causa una excepción
  } catch (e) {
    console.log('Excepcion capturada: %s', e);
  }
  yield 'Llego hasta aquí sin dejar de funcionar.';
}
dummy().next();
// Caught exception: TypeError: Cannot read property 'foo' of null
{ value: 'Llego aquí sin dejar de funcionar.', done: false }
```

Además, las funciones generadoras poseen un método `throw()` que permite enviar
una excepción a un generador, lanzando un bloque `try-catch`
dentro del generador para capturar dicha excepción.

Nota: si un generador no posee ningún bloque `try-catch`, la excepción será
devuelta desde el generador:

```js
function *foo () { yield 'dentro de foo'; }

var it = foo();
try {
  it.throw('BOOO desde fuera');
} catch (errFromIt) {
  console.log('Error: %s ', errFromIt); // Error: BOOO desde fuera
}
```

## Tarea
Escribe una función-generadora `upper` que reciba un array de strings y convierta
a cada uno en letras mayúsculas.

**El problema:** Alguien envía un número dentro de `upper` y este deja de funcionar.
Por favor arréglalo. Si `upper` recibe un número deberia devolver `null`.

**Sigue este modelo**

```js
function *upper (items) {
  // escribe tu código aquí
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// deberia imprimir: A, B, null, C
```
