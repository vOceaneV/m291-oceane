# Bug du compteur
Ce que je vois : un compteur 
Ce que j’attendais : que si j'appuie sur le bouton +1 le chiffre augmente de 1
La boîte qui change : le chiffre augmente au niveau de la console 
Ce qui ne se met pas à jour : le chiffre n'augmente pas sur la page 

Ligne à rajouter au code : document.getElementById("affiche").textContent = n; 