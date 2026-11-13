// Phare : la page qui affiche les lieux.
// Les 30 fiches sont dans data.json. Cette semaine, vous les faites venir avec fetch.

const conteneur = document.getElementById("liste-cartes");
const zoneEtat = document.getElementById("etat");

// La pile de toutes les fiches. Elle est vide tant que data.json n'est pas arrivé.
let tousLesLieux = [];

// Montre une carte par fiche de la liste qu'on lui donne.
// Elle efface d'abord les cartes déjà affichées.
function afficherLieux(liste) {
  conteneur.textContent = "";
}

// ----- Votre code de la semaine 11 commence ici -----
fetch("data.json")
 .then(function (reponse) {
 return reponse.json();
 })
 .then(function (donnees) {
 console.log(donnees.length);
 tousLesLieux = donnees;
 console.log(tousLesLieux.length);
 console.log(donnees[0]);
 console.log(donnees[0].nom);
 for (const lieu of donnees) {
 console.log(lieu.nom);
 const carte = document.createElement("article");
    carte.className = "carte";

    const titre = document.createElement("h2");
    titre.textContent = lieu.nom;

    const quartier = document.createElement("p");
    quartier.className = "quartier";
    quartier.textContent = lieu.quartier;

    const etat = document.createElement("p");
    if (lieu.ouvert) {
      etat.className = "etat ouvert";
      etat.textContent = "Ouvert";
    } else {
      etat.className = "etat ferme";
      etat.textContent = "Fermé";
    }

    const bruit = document.createElement("p");
    bruit.textContent = "Bruit : " + lieu.bruit + " sur 5";

    carte.append(titre, quartier, etat, bruit);
    conteneur.append(carte);
 }
 const carte = document.createElement("article");
 carte.className = "carte";
 const titre = document.createElement("h2");
 titre.textContent = lieu.nom;
 carte.append(titre);
 conteneur.append(carte);
 });
