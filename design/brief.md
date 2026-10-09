# Brief — HappyPAL

## Pitch
HappyPAL est une bibliothèque virtuelle privée qui référence les livres lus, ceux de la pile à lire (PAL) et ceux de la wish list. Elle s'adresse aux lecteurs et lectrices qui veulent savoir en quelques secondes où en est un livre et surtout si le livre est déja en notre possession.

## Public
Camille, 24 ans, employée de commerce, lit dans le train et en librairie. Elle utilise surtout son téléphone (390 px) d'une seule main. Elle veut retrouver un livre par titre, auteur, état ou gendre. Elle ferme l'onglet si on lui impose un compte ou si la recherche ne répond rien. 

Détails : persona.md`.

## Écrans
- Écran 1 : Accueil
- Écran 2 : Recherche filtrée (résultats)
- Écran 3 : Fiche livre

## Contenu de chaque écran

### Écran 1 — Accueil
- On y voit : le logo HappyPAL, la baseline « Ma bibliothèque virtuelle · privée », le champ de recherche (« Titre, auteur… ») avec une loupe, « Recherche avancée », puis trois étagères : Bibliothèque (Lus, nombre de livre), PAL (À lire, nombre de livre) et Wish list (À acheter, nombre de livre). Aucun livre n'est affiché sur cet écran.
- On peut y faire : chercher un livre, ouvrir la recherche avancée (filtres état et type), toucher une étagère pour voir ses livres, créer une fiche.
- Bouton principal : la loupe (lancer la recherche). Bouton secondaire : « + Nouvelle fiche ».

### Écran 2 — Recherche filtrée
- On y voit : le champ avec la recherche en cours, les puces d'état (Tous, Bibliothèque, PAL, Wish list) dont une est active, un filtre « Type de livre », le nombre de résultats, puis des cartes (couverture, titre, auteur, état écrit en toutes lettres).
- On peut y faire : changer de filtre, modifier la recherche, ouvrir une fiche, revenir à l'accueil.
- Bouton principal : la carte d'un livre (ouvrir la fiche). Si aucun résultat : « Effacer les filtres ».

### Écran 3 — Fiche livre
- On y voit : couverture, titre, auteur, type, état écrit (« PAL · À lire »), résumé.
- On peut y faire : déplacer le livre vers un autre état, modifier la fiche, revenir en arrière.
- Bouton principal : « Déplacer vers [autre état] », suivi du message « ✓ Fiche déplacée dans [état] ».

## Ambiance visuelle
Chaleureuse, douce, calme. 

Comme une petite librairie de quartier : étagères en bois clair, étiquettes cousues main, lumière chaude.

## Palette
- Fond : crème chaud, cartes en blanc cassé 
- Texte : brun très foncé, texte secondaire brun moyen
- Accent : terracotta pour la loupe et la Bibliothèque, vert sauge foncé pour le bouton « + Nouvelle fiche » et la PAL, ocre foncé pour la Wish list.
- Attention / erreur : rouge brique, toujours accompagné d'une icône et d'un texte, jamais seul.

## Contraintes techniques et ergonomiques
- Mobile first : largeur de référence 390 px, puis adaptation large (≥ 1024 px).
- HTML5 sémantique, CSS moderne avec variables, JavaScript natif.
- Accessibilité : texte ≥ 4,5:1, éléments d'interface ≥ 3:1, cibles tactiles ≥ 48 px, focus clavier visible, navigation complète au clavier.
- Les données sont inventées et stockées côté navigateur (fichier JSON), sans serveur.

## Interdits
- Pas de Bootstrap, pas de React, pas de framework ni de bibliothèque externe (CSS comme JS).
- Pas de compte obligatoire, pas de mot de passe, pas de connexion pour consulter ses listes.
- Pas de base de données partagée ni de fonction « voir la bibliothèque d'un autre ».
- Pas de polices, d'icônes ou d'images chargées depuis un site externe (CDN, hotlinking).
- Pas de couleur seule pour indiquer un état : toujours le texte « Lus / À lire / À acheter ».
- Pas de `outline: none` sans remplacement visible du focus.
- Pas de texte de placeholder à la place d'une vraie étiquette de champ.
- Pas d'information accessible uniquement au survol (la cible est le téléphone).
- Pas de cible tactile de moins de 48 px de haut.
- Pas de livres affichés sur l'accueil : seulement les trois étagères et la recherche.
- Pas de fenêtre pop-up, de bandeau cookies ni de carrousel.
