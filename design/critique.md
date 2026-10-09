# Fiche critique - design [a/b/c] - direction [b]

## Matrice d'évaluation comparative (note de 1 à 5)

| Critère | A sobre | B chaleureuse | C audacieuse |
|---|---|---|---|
| Lisibilité | 4 | 4 | 4 |
| Navigation | 4 | 4 | 4 |
| Feedback | 2 | 4 | 4 |
| Cohérence | 5 | 5 | 3 |
| Accessibilité | 5 | 4 | 5 |
| **Total** | **20** | **21** | **20** |

## Fiche critique — design 1 · direction A (sobre)

**2 forces**
1. Critère : Accessibilité  
preuve : texte bleu nuit sur fond chaud à 14,81:1, loupe blanche sur bleu nuit à 15,70:1, tout dépasse largement 4,5:1.

2. Critère : Cohérence 
preuve : un seul bleu nuit, des filets fins et une seule famille serif (Lora) dans tout l'écran ; la hiérarchie est lisible sans effort.

**2 faiblesses**
1. Critère : Feedback 
preuve : les trois étagères ont la même encre et des icônes passées en niveaux de gris ; on ne les distingue qu'en lisant « Lus / À lire / À acheter ».

2. Critère : Navigation 
preuve : le seul retour visuel est un fond gris au survol (`:hover`), invisible sur un téléphone ; rien ne dit que les rangées sont touchables.

**Verdict :** j'élimine ce design parce que Camille doit reconnaître l'état d'un coup d'œil, d'une seule main dans le train. La piste A est très lisible mais trop uniforme pour cette tâche.

---

## Fiche critique — design 2 · direction B (chaleureuse)

**2 forces**
1. Critère : Feedback 
preuve : chaque étagère combine trois signaux, une couleur (terracotta, sauge, ocre), un libellé écrit (« Lus », « À lire », « À acheter ») et une pastille avec le nombre de livres. La couleur n'est jamais seule.

2. Critère : Cohérence 
preuve : les mêmes trois teintes reviennent sur la languette, la pastille, le bouton et la loupe ; les trois étagères se terminent à 797 px sur 844, donc tout l'accueil est visible sans défiler.

**2 faiblesses**
1. Critère : Accessibilité 
preuve : la mesure a montré deux défauts sur les teintes pâles, une bordure de champ à 1,34:1 et un lien à 4,32:1 ; ils sont corrigés (3,73:1 et 5,66:1), mais la palette demande de la vigilance à chaque nouvel écran.

2. Critère : Lisibilité 
preuve : sur 390 px la baseline « Ma bibliothèque virtuelle · privée » passe sur deux lignes, et les icônes sont des emojis dont le dessin dépend du téléphone.

**Verdict :** je garde ce design parce que Camille veut reconnaître d'un coup d'œil où en est un livre (persona), et que cette piste signale l'état avec trois indices redondants tout en gardant la recherche et les étagères sur un seul écran (tâche).

---

## Fiche critique — design 3 · direction C (moderne)

**2 forces**
1. Critère : Accessibilité 
preuve : noir sur jaune à 13,08:1, sur turquoise à 10,46:1, sur rose à 7,73:1 ; blanc sur violet à 8,69:1. C'est la piste la plus contrastée en couleur.

2. Critère : Feedback 
preuve : trois aplats de couleurs franches et des compteurs de 3,4 rem ; l'état et le nombre de livres se lisent à bout de bras.

**2 faiblesses**
1. Critère : Cohérence 
preuve : bordures de 3 px, ombres dures et couleurs saturées donnent un ton de poster ou de jeu, loin de l'univers calme de la lecture.

2. Critère : Lisibilité 
preuve : trois blocs très colorés dominent l'écran ; quand les couvertures de livres arriveront dans les listes, elles devront rivaliser avec ces aplats.

**Verdict :** j'élimine ce design parce que, même très lisible, ses couleurs trop vives ne correspondent pas au moment de calme que cherche Camille en consulte sa bibliothèque, et il risque de gêner la lecture des fiches.

## Choix argumenté

Je retiens la piste B (chaleureuse).

- Pour le persona : Camille cherche, d'une main, à savoir si un livre est lu, à lire ou à acheter. La piste B donne trois indices pour chaque état (couleur, mot, pastille chiffrée). La piste A n'en donne qu'un (le mot), et la piste C est plus bruyante.
- Pour la tâche : le champ de recherche, la recherche avancée et les trois étagères tiennent sur un seul écran (797 px sur 844). Le point de départ du flow est donc complet dès l'ouverture de l'app.
- Pour l'accessibilité : après correction, tous les textes dépassent 4,5:1 et les bordures de champ 3:1. Chaque contrainte vient d'une mesure, pas d'un goût.
- Ce que nous empruntons : rien pour l'instant. Une idée de la piste C à tester à l'observation : agrandir les compteurs des pastilles.
