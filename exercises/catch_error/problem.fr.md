Essayez de lancer/rattraper des erreurs avec les générateurs.

## Infos

La meilleure chose que nous apportent les générateurs est la **synchronicité**.
Le code à l’intérieur des fonctions générateurs est synchrone, même si nous
itérons sur les générateurs de façon asynchrone.

Cela signifie que nous pouvons facilement utiliser les blocs `try { … } catch() { … }`.

```js
function *dummy () {
  try {
    null.foo(); // cause une exception
  } catch (e) {
    console.log('Exception rattrapée : %s', e);
  }
  yield 'Arrivé jusqu’ici sans problème.';
}
dummy().next();
// Exception rattrapée : TypeError: Cannot read property 'foo' of null
{ value: 'Arrivé jusqu’ici sans problème.', done: false }
```

Par ailleurs, les fonctions générateurs ont une méthode `throw()` qui vous
permet, en tant qu’appelant, de passer une exception au générateur, ce qui
déclenchera son bloc `try`/`catch` éventuel.

Remarquez que si le générateur n’a pas un tel bloc autour de son `yield`,
l’exception ainsi transmise sera levée telle quelle par le générateur :

```js
function *foo () { yield 'dans foo'; }

var it = foo();
try {
  it.throw('KABOUM depuis le code appelant');
} catch (errFromIt) {
  console.log('Erreur : %s ', errFromIt);
}

// Erreur : KABOUM depuis le code appelant
```

## Défi

Écrivez une fonction générateur `upper()` qui prend un tableau de chaînes
de caractères et `yield` chacune en majuscule, à tour de rôle.

**Le souci :** quelqu’un a envoyé un nombre au lieu d’une chaîne et `upper()`
est cassée.  Merci de la réparer.  Si `upper()` se prend un nombre, elle
devrait renvoyer `null` au lieu du texte en majuscules.

## Base de travail

Utilisez le code de départ suivant :

```js
function *upper (items) {
  // Votre code ici
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// On cherche à obtenir : A, B, null, C
```
