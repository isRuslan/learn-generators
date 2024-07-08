Learn ES6 Generators
================

>An Intro to ES6 generators via a set of self-guided workshops.

![learn-generators](https://raw.githubusercontent.com/isRuslan/learn-generators/master/learn-generators.jpg)

[![NPM](https://nodei.co/npm/learn-generators.png)](https://nodei.co/npm/learn-generators/)

<a href="https://twitter.com/intent/tweet?hashtags=nodeschool&via=isRuslan&original_referer=https://github.com/&text=Learn+ES6+Generators+with&tw_p=tweetbutton&url=https://github.com/isRuslan/learn-generators" target="_blank">
  <img src="http://jpillora.com/github-twitter-button/img/tweet.png"></img>
</a> [![npm version](https://badge.fury.io/js/learn-generators.svg)](http://badge.fury.io/js/learn-generators)

You can ask questions in [nodeschool/discussions](https://github.com/nodeschool/discussions) board:   [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodeschool/discussions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Send an anonymous feedback about `learn-generators` here: <a href="https://docs.google.com/forms/d/1f_9BvE7Z61dRRg1uKslgNJMQ1AmeO_uTExC-QltBbKY" target="_blank">google/form</a>.

## Install or Update

>You need nodejs >= 0.12.x or iojs >= 1.0.x

```
$ npm install learn-generators -g
```

## Start learning

#### 0. General information

`learn-generators` is i18n-friendly workshopper, currently you can learn on English or French language.
Hit `choose language` menu item or selet language with `-l` flag with avaiable prefixes: `en`, `fr`, `ko`, `ja`, `es` and `ru`. Type:

```
$ learn-generators -l
```

To see available languages and select the language which you like.

You can also get all available commads in `help`:

```
$ learn-generators help
```

#### 1. Select a topic to learn

Once the workshop is installed, run `learn-generators` to print a menu
where you use the arrows ↑↓ (vim `jk` works too) to select a topic to learn.

```
$ learn-generators
```

#### 2. Writing your solution

Once you have selected a topic, the workshop will remember which problem you are working on. 
Using your preferred editor, simply create a file to write your solution in. Most topics will
supply some boilerplate with which to get started. Copy this from the topic description to your
solution file.

#### 3. Testing your solution

Use the workshop's `run` command to point the workshop at your solution file. Your solution will loaded 
and passed the topic input. This usually won't perform any validation, it will only show the program output.

```
$ learn-generators run mysolution.js
```

#### 4. Verifying your solution

Your solution will be verified against the output of the 'official' solution. 
If all of the output matches, then you have successfully solved the problem!

```
$ learn-generators verify mysolution.js
```

## Stuck?

Feedback and criticism is welcome, please log your troubles in [issues](https://github.com/isRuslan/learn-generators/issues).
Or you can send an anonymous feedback here: <a href="https://docs.google.com/forms/d/1f_9BvE7Z61dRRg1uKslgNJMQ1AmeO_uTExC-QltBbKY" target="_blank">google/form</a>.


## Thanks

You can learn generators due to this people:

<table>
<thead>
<tr><th align="left">Name</th><th>GitHub</th><th>Twitter</th></tr>
</thead>
<tbody>
<tr><td align="left">Ruslan Ismagilov</td><td><a href="https://github.com/isRuslan">@isRuslan</a></td><td><a href="http://twitter.com/is_ruslan">@is_ruslan</a></td></tr>
<tr><td align="left">Ilia Akhmadullin</td><td><a href="https://github.com/i-akhmadullin">@i-akhmadullin</a></td><td><a href="http://twitter.com/i_akhmadullin">@i_akhmadullin</a></td></tr>
<tr><td align="left">Max Ogden</td><td><a href="https://github.com/maxogden">@maxogden</a></td><td><a href="http://twitter.com/maxogden">@maxogden</a></td></tr>
<tr><td align="left">Christophe Porteneuve</td><td><a href="https://github.com/tdd">@tdd</a></td><td><a href="http://twitter.com/porteneuve">@porteneuve</a></td></tr>
<tr><td align="left">Julien Fontanet</td><td><a href="https://github.com/julien-f">@julien-f</a></td><td><a href="http://twitter.com/JulienFontanet">@JulienFontanet</a></td></tr>
<tr><td align="left">Shim</td><td><a href="https://github.com/marocchino">@marocchino</a></td><td><a href="http://twitter.com/marocchino">@marocchino</a></td></tr>
<tr><td align="left">Kuniyoshi Tone</td><td><a href="https://github.com/kunichan2013">@kunichan2013</a></td><td><a href="http://twitter.com/kunitone">@kunitone</a></td></tr>
<tr><td align="left">Nicolás Bevilacqua</td><td><a href="https://github.com/nicobevilacqua">@nicobevilacqua</a></td><td><a href="http://twitter.com/NicoBeviIacqua_">@NicoBeviIacqua_</a></td></tr>
</tbody>
</table>

**Rod Vagg (@rvagg)** made this workshopper framework (⌐■_■)


## License
MIT © [Ruslan Ismagilov](https://github.com/isRuslan)
