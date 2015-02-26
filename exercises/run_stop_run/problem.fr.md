Introduction aux générateurs ES6.

## Infos

Les générateurs sont des fonctions qui peuvent être interrompues
en cours de route, et exécutées à nouveau plus tard, autant de
fois qu’on le souhaite.  Par exemple :

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'dans foo')
}
var G = foo();

console.log( G.next() );
// { value: 'woo', done: false }

console.log( G.next('bar') );
// 'bar', 'dans foo'
// { value: undefined, done: true }
```

Il s’est passé quoi, là ?!  Il faut remarquer certains points :

**1)** l’astérisque (`*`) — juste un indice que `foo` est un générateur.
Vous pouvez le placer n’importe où entre le mot-clé `function` et le nom
de la fonction, avec ou sans espaces autour.

**2)** l’expression `yield` — elle suspend le générateur et renvoie `"woo"`.
Ceci met le générateur en pause jusqu'à ce qu’on appelle sa méthode `next()`
(voir point 3 ci-dessous).  On relancera le générateur en envoyant la chaîne
`"bar"` via `next()`, qui deviendra du coup la valeur retournée par
l’expression `yield` à l’intérieur de `foo()`, et sera donc affectée à la
variable `stop`.  Les contextes sont sauvegardés à chaque changement d’état
« départ -> arrêt -> reprise ».

**3)** Le résultat de la fonction `foo()` est un objet disposant d’une méthode `next()`.  Cette méthode renvoie elle-même un objet de type `{ value: VALEUR_DU_YIELD, done: ON_A_FINI }`.

## Docs

 - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*
 - http://wiki.ecmascript.org/doku.php?id=harmony:generators

## Défi

Écrivez une fonction-générateur `range`, qui prend deux arguments `from` et `to`.

Affichez les nombres de cet intervalle en tant que chaînes, un par ligne.

## Base de travail

Utilisez le code de départ suivant :

```js
function *range(from, to) {
  // Votre code ici
}

for (var r of range(5, 10)) {
    console.log( r );
}
// Ça devrait afficher : 5, 6, 7, 8, 9, 10
```
