Générateurs vs. Itérateurs.  Quelle est la différence ?

## Infos

Le principal truc à savoir, c'est que **les générateurs sont des itérateurs**.
Ils se contentent d’enrober un objet itérateur (voir « Le protocole itérateur »,
ci-dessous).

Les générateurs ne s’exécutent pas la première fois qu’ils sont appelés,
mais renvoient plutôt un objet itérateur avec quelques méthodes (`send()`,
`next()`, `throw()` et `close()`).

Les itérateurs sont un patron de conception dans lequel on traverse une
séquence à raison d’une exécution à la fois, en appelant `next()`.  À chaque
`next()`, on obtient l’élément suivant de la séquence :-).  C’est plutôt
logique et ça nous est déjà familier.

## Docs

 - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration
 - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
 - http://wiki.ecmascript.org/doku.php?id=harmony:iterators

## Défi

Écrivez une fonction générateur `factorial()` qui, lorsqu’on lui donne
un nombre, démarre à 1 puis monte à partir de là, en retournant (avec
`yield`) la factorielle de chaque nombre au fil de l’eau.

N’utilisez pas de récursivité, juste une boucle !

## Base de travail

Utilisez le code de départ suivant :

```js
function *factorial(n) {
  // Votre code ici
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120
```
