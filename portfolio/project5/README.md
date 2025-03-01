# Calorie Counter 🍏🍔


## Description

Le Calorie Counter est une application web interactive qui permet à un utilisateur de suivre et de gérer son budget calorique quotidien. L'application permet à l'utilisateur de saisir des informations sur ses repas (petit-déjeuner, déjeuner, dîner, encas) ainsi que ses exercices physiques, et elle calcule le nombre de calories restantes en fonction du budget calorique qu'il a défini.

## Fonctionnalités principales :

* Définir un budget calorique : L'utilisateur peut entrer son budget calorique quotidien dans un champ prévu à cet effet.
* Ajouter des repas et des exercices : L'utilisateur peut ajouter des éléments à chaque catégorie (petit-déjeuner, déjeuner, dîner, encas, exercice) à l'aide de champs de saisie et de boutons interactifs.
* Calcul dynamique des calories : Le total des calories consommées est calculé automatiquement et mis à jour en temps réel.
* Validation des entrées : L'application valide les données saisies pour s'assurer qu'elles respectent un format correct avant d'effectuer des calculs. Les entrées invalides sont signalées à l'utilisateur.
* Affichage dynamique : Le résultat du calcul des calories restantes est mis à jour et affiché dynamiquement dans l'interface, offrant à l'utilisateur une vue d'ensemble instantanée de son budget calorique.

Le projet met en pratique des concepts importants tels que la validation de formulaires, l'interaction avec le DOM, les expressions régulières et l'utilisation des template literals pour manipuler et afficher du HTML de manière dynamique.

L'objectif est de créer une interface utilisateur simple et intuitive pour que l'utilisateur puisse suivre ses apports caloriques tout au long de la journée et ajuster ses repas et exercices en fonction de son budget calorique.

## Contexte 📚

Ce projet fait partie de mon parcours d'auto-formation sur FreeCodeCamp. L'objectif était de créer une application web permettant de suivre l'apport calorique de la journée, en validant les entrées utilisateur, en effectuant des calculs et en mettant à jour dynamiquement l'interface. C'est un projet essentiel pour apprendre à manipuler le DOM, valider les données, et utiliser les expressions régulières en JavaScript.

---

## Difficultés rencontrées 😅

### 1️⃣ Expressions régulières et le symbole **`e`** 🚀
Dans le cadre de ce projet, je devais manipuler des valeurs numériques, y compris celles en **notation scientifique** (par exemple, `5e3` pour `5000`).

- **Problème** : Je voulais comprendre ce que représente le **`e`** dans une expression régulière. Après quelques recherches, j'ai compris que **`e`** dans ce contexte représente **10 puissance quelque chose**, ce qui signifie que **`5e3`** est en réalité **5000**.
- **Solution** : La notation **`[0-9]+e[0-9]+`** (ou **`/d+e\d+/`**) est utilisée pour détecter ce type de valeur numérique. Le **`+`** signifie qu'il peut y avoir plusieurs chiffres avant ou après le **`e`**.

### 2️⃣ Le **`$`** dans les **Template Literals** 💡
Au début, je ne comprenais pas à quoi servait le symbole **`$`** dans une **template literal string** (backtick string). Je pensais que c'était un type de concaténation, mais j'avais un peu de mal à saisir la différence.

- **Problème** : J'avais l'impression que c'était juste une **concaténation** et que **`$`** était la même chose que l'opérateur **`+`**.
- **Solution** : En réalité, **`${}`** dans une **template literal** permet d'inclure des expressions JavaScript directement dans une chaîne de caractères, ce qui rend le code plus lisible et pratique pour l'insertion de variables. Exemple :

  ```javascript
  const name = "Mimi !";
  const hello = "Hello, ";
  console.log(`${hello}${name}`); // "Hello, Mimi !"



## Conclusion 🎯

Ce projet m'a permis de pratiquer et de comprendre des concepts fondamentaux du développement web, tels que la validation des données, les expressions régulières, et l'utilisation des template literals. C'était une étape importante dans mon apprentissage du JavaScript et dans la construction d'interfaces dynamiques.
