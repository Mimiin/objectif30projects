# Rock, Paper, Scissors Game 🎮✌️✋✊

## Contexte 💡

Ce projet fait partie de mon auto-formation en développement web. J'ai utilisé les ressources de **FreeCodeCamp** pour construire un jeu classique de pierre-papier-ciseau en JavaScript. L'objectif était de créer une application fonctionnelle où l'utilisateur joue contre l'ordinateur, et de bien comprendre la logique des fonctions, des conditions et de la manipulation du DOM.

---

## Ce que j'ai appris 💻✨

- **Manipulation du DOM** : Utilisation de `innerText` et `innerHTML` pour afficher dynamiquement les résultats et scores du jeu.
- **Gestion des événements** : Comment gérer les clics et les interactions de l'utilisateur en utilisant `addEventListener` pour lancer les rounds.
- **Les conditions if, else if, else** : J'ai beaucoup utilisé ces structures pour gérer les résultats du jeu et déterminer qui a gagné (joueur ou ordinateur).
- **Math.random() et Math.floor()** : Pour choisir aléatoirement l'option de l'ordinateur entre "Rock", "Paper", et "Scissors".
- **Fonctions conditionnelles** : Création de la fonction `hasPlayerWonTheRound` pour déterminer si le joueur a gagné la partie en fonction des choix faits.

---

## Les difficultés que j'ai rencontrées 😓

1. **Logique des conditions** : Initialement, je n'étais pas sûre de comment gérer toutes les situations possibles dans le jeu (qui gagne entre l'ordinateur et le joueur), mais en fin de compte, avec des `if` et des `else`, j'ai réussi à gérer tous les cas correctement.
2. **Manipulation des éléments du DOM** : Utiliser `innerText` et `innerHTML` pour mettre à jour les scores et afficher les messages était un peu flou sans instructions guidées au début, mais une fois que j'ai compris comment accéder aux éléments du HTML avec `getElementById()` et `querySelector()`, tout est devenu plus clair.
3. **Affichage du gagnant** : Il y a eu un moment où je n'arrivais pas à faire apparaître le bouton de réinitialisation du jeu ou à cacher les options lorsque quelqu'un gagne. J'ai appris à manipuler `style.display` pour afficher ou masquer des éléments du DOM.

---

## Fonctionnalités du jeu 🎮

- Le joueur choisit entre **Rock**, **Paper**, ou **Scissors**.
- L'ordinateur choisit également aléatoirement l'une des trois options.
- Le jeu déclare le gagnant du round et met à jour les scores.
- Le premier joueur à atteindre 3 points remporte la partie.
- Après la victoire, un bouton de réinitialisation permet de relancer la partie.

---

## Comment ça marche ⚙️

1. **Choix du joueur** : Le joueur clique sur l'une des options proposées : "Rock", "Paper", ou "Scissors".
2. **Choix de l'ordinateur** : Le programme génère aléatoirement un choix pour l'ordinateur.
3. **Comparaison des choix** : Le jeu compare les choix du joueur et de l'ordinateur pour déterminer le gagnant du round.
4. **Mise à jour des scores** : Le score du joueur ou de l'ordinateur est mis à jour en fonction du résultat du round.
5. **Fin du jeu** : Le premier à atteindre 3 points gagne, et un message de victoire est affiché. Le bouton "Réinitialiser" permet de recommencer une nouvelle partie.

---

