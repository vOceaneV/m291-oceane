# Journal du jeu du prompt
## Manche 1 — trop vague
Prompt : change le bouton

Ce que l’IA a fait : J'ai ajouté un petit script JavaScript : au clic, le bouton #magic passe du gris à un vert doux (#a8d5ba). C'était nécessaire ici car un changement permanent de couleur au clic ne peut pas se faire en CSS pur (seul :active existe, mais il ne dure que le temps du clic maintenu).
Le reste du fichier (mise en page, styles, métadonnées) n'a pas été touché, comme demandé dans le commentaire du code.

Pourquoi c’est un problème : l'IA fait ce qu'elle veut
## Manche 2 — précis
Prompt : Je suis élève M291, je débute. Pas de framework, pas de Bootstrap, pas de librairie.
Voici mon fichier index.html (ci-dessus).
Tâche unique :
- le bouton dont l’id est "magic"
- au clic, son fond devient #e36414 et le texte devient blanc
- tu n’ajoutes qu’un petit script, dans le même fichier
- tu ne changes ni le titre, ni le paragraphe, ni la mise en page
Ensuite, AVANT le code, explique en 4 phrases :
1. quelle ligne « écoute » le clic
2. quelle ligne change la couleur
3. pourquoi on a besoin de l’id "magic"
4. ce que tu n’as volontairement pas touché

Ce que l’IA a fait : Voici les explications, puis le code.

La ligne document.getElementById('magic').addEventListener('click', ...) est celle qui « écoute » le clic : elle surveille l'élément portant l'id magic et déclenche une action dès qu'on clique dessus.
Les lignes this.style.background = '#e36414'; et this.style.color = '#ffffff';, à l'intérieur de la fonction, sont celles qui changent la couleur du fond et du texte du bouton.
On a besoin de l'id magic car c'est lui qui permet à getElementById de cibler précisément ce bouton parmi tous les autres éléments de la page ; sans id, le script ne saurait pas quel élément modifier.
Je n'ai volontairement pas touché au titre, au paragraphe, ni à la mise en page définie dans le style d'origine : seul un script a été ajouté juste avant la fermeture de body.

Résultat : le bouton devient orange au clic

Explication que je retiens : Il faut être le plus précis possible pour que le résultat resssemble le plus possible à ce que l'on veut faire en moins de demande possible.
## Ce que je changerais la prochaine fois
Savoir le plus exactement possible ce que je demande par rapport au résultat voulu. 