Ayez l’air synchrone, mais en fait, faites des promesses.

## Infos

Une autre façon pour que notre code ait « l’air synchrone » consiste à
utiliser les **promesses**.

Un peu comme auparavant avec les **fonctions de rappel**, nous pouvons
attendre qu’une promesse soit résolue/acquittée, et faire un `yield` avec
le résultat.

Reprenons l’exemple de l’exercice précédent : lire le contenu du dossier
`exercises`, mais cette fois-ci avec des promesses :

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
  // Presque le même générateur que dans l’exercice précédent
  var exercises = yield readDir('exercises');
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});
```

Ici, nous définissons une fonction `readDir` qui renvoie une promesse
pour le contenu du répertoire.  Le seul truc vraiment intéressant survient
dans la fonction `run()` : on a **fait un `yield` avec la promesse renvoyée
par `readDir()`**, qui va attendre la résolution (l’acquittement) de la
promesse pour continuer.

Comment diable `run()` a-t-il fait ça ?  Eh bien justement, vous allez le coder.

## Docs

 - http://www.html5rocks.com/fr/tutorials/es6/promises/
 - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
 - https://www.promisejs.org/

## Défi

Écrivez une fonction `run()` qui prend un générateur en argument, le
démarre et récupère une **promesse comme valeur de `yield`**.  Vous pouvez
partir du `run()` de l’exercice précédent comme base de départ.

## Base de travail

Utilisez le code de départ suivant :

```js
function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // Votre code ici
}

run(function* () {
  // Améliorations : gestion d’erreurs ?
  var foo = yield askFoo();
  console.log(foo);
});
```
