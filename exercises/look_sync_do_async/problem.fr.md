Ayez l’air synchrone, tout en étant, en fait, asynchrone.

## Infos

Les générateurs nous permettent de masquer l’**asynchronicité** comme un
simple détail d’implémentation, nous permettant ainsi d‘écrire du code
facile à lire, maintenable, d’aspect synchrone.

Kékidi ?!

Les générateurs peuvent **suspendre leur exécution** le temps que les
appels asynchrones aboutissent.

Par exemple, disons que vous souhaitez lire le contenu du répertoire courant
à l’aide de la fonction ``fs.readdir(dir, cb)`, mais sans retomber dans
les fonctions de rappel :

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
  // Lisons le dossier d’exercices de `learn-generators`
  var exercises = yield fs.readdir('exercises', done);
  console.log(exercises); // [ 'look_sync_do_async', …, 'run_stop_run' ]
});
```

Ici, nous créons un générateur qui s’arrête et attend que `readdir()` ait
terminé.

La clé pour que tout ça fonctionne, c’est notre fonction `run()`.  Son flux
de contrôle est le suivant :

**1)** Crée un nouvel itérateur-générateur (`it`) ;
**2)** Définit une fonction `go()`, qui appelle `it.next()` ;
**3)** Passe `go` à l’itérateur-générateur ;
**4)** Exécute `go` une première fois, sans arguments, pour lancer le générateur.

Au total, `go` est appelée deux fois : une fois sans arguments (ce qui
déclenche l’exécution du générateur), et une deuxième fois avec les
résultats de l’appel `fs` associé au `yield`.

Si ça reste incompréhensible, essayez d’insérer des appels `console.log()`
de-ci de-là et tracez l’exécution du programme (ou utilisez un débogueur).

## Docs

 - http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 - http://en.wikipedia.org/wiki/Thunk

## Défi

Ajoutez une gestion d’erreur au code ci-dessous.  Apprenez à `run()` à
lever une exception et à la rattraper dans le générateur.  `firstFile`
devrait être simplement `null` s’il n’existe pas.

## Base de travail

Utilisez le code de départ suivant :

```js
var fs = require('fs');

function run (generator) {
  // Améliorez le `run` ci-dessus
}

run(function* (done) {
  // rattrapez l’exception
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // Mais ce dossier n’existe pas
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined

  console.log(firstFile);
});
```
