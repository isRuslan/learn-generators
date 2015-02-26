Des générateurs dans des générateurs.

## Infos

On peut déléguer le contrôle de l’itération de notre générateur vers un autre.
L’expression `yield*` va s’en occuper, `*` signifiant que cette **expression**
est également un générateur, de sorte qu’on peut lui envoyer un message.

```js
function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // déléguer à foo
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3
```

## Docs

- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/yield*

## Défi

Écrivez une fonction générateur `flat()` qui prend des tableaux imbriqués
(un tableau de tableaux de tableaux de…) et les aplatit vers un seul niveau.

## Base de travail

Utilisez le code de départ suivant :

```js
function *flat (arr) {
  // Votre code ici
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
```

## Astuces

La méthode native `Array.isArray()` vous sera utile.
