Generadores dentro de generadores

## Información
Podemos delegar el control de la iteración desde nuestro generador a otro.
`yield * expression` hará este truco, `*` quiere decir que **expression**
es un generador tambien, por lo que podemos enviarle un mensaje.

```js
function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // foo delegaod
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3
```

## Documentación
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

## Tarea
Escribe una función-generadora `flat` que convierte un array multidimensional y lo aplana.

**Sigue este modelo:**

```js
function *flat (arr) {
  // escribe tu código aquí 
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
```
