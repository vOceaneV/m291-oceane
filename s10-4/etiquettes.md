# Mes étiquettes

Projet : HappyPAL

Une ligne par étiquette. Chaque étiquette, sauf `id`, doit servir à afficher, filtrer ou trier sur au moins un écran de votre brief (méthode en 6 questions, exercice 3).

| Étiquette | Écran du brief qui l'affiche | Sert à (afficher, filtrer, trier) | Sorte de valeur (texte, nombre, vrai/faux) | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | oui | 1 |
| `titre` | Écran 2 (carte), Écran 3 (fiche) | afficher, filtrer (champ de recherche « Titre, auteur… ») | texte | non | La Parole des étoiles |
| `auteur` | Écran 2 (carte), Écran 3 (fiche) | afficher, filtrer (champ de recherche « Titre, auteur… ») | texte | non | Louise Langlois |
| `etat` | Écran 1 (étagères et nombre de livres), Écran 2 (puces et carte), Écran 3 (« PAL · À lire ») | afficher, filtrer (puces Tous, Bibliothèque, PAL, Wish list) | texte (3 valeurs : bibliotheque, pal, wishlist) | non | bibliotheque |
| `type` | Écran 2 (filtre « Type de livre »), Écran 3 (fiche) | afficher, filtrer | texte | non | roman |
| `couverture` | Écran 2 (carte), Écran 3 (fiche) | afficher | texte (nom d'un fichier image local, jamais un lien externe) | non | images/la-parole-des-etoiles.jpg |
| `resume` | Écran 3 (fiche) | afficher | texte | non | Quatre lycéens très différents, réunis dans un groupe de parole imposé par la psychologue de leur lycée, apprennent peu à peu à mettre des mots sur leurs blessures. |
