const newLocal = document.getElementById("searchInput");
// Obtient la référence de l'élément input de recherche
var searchInput = newLocal;

// Écoute l'événement de saisie dans le champ de recherche
searchInput.addEventListener("input", function () {
var searchValue = searchInput.value.trim().toLowerCase();

// Réinitialise le tableau avant d'appliquer le filtre
tableBody.innerHTML = "";

// Parcourt le tableau d'étudiants et construit les lignes du tableau pour les étudiants filtrés
etudiants.forEach(function (etudiantListe) {
var etudiantName = (`${etudiantListe.nom} ${etudiantListe.prenom}`).toLowerCase();

if (etudiantName.includes(searchValue)) {
var tableau = document.createElement("tr");
tableau.innerHTML = "<td>" + etudiantListe.nom + "</td>" +
"<td>" + etudiantListe.prenom + "</td>" +
"<td>" + etudiantListe.âge + "</td>" +
"<td>" + etudiantListe.note + "</td>";
tableBody.appendChild(tableau);
}
});

// Vérifie s'il n'y a pas de résultats correspondant à la recherche
if (tableBody.children.length === 0) {
var accunResultat = document.createElement("tr");
accunResultat.innerHTML = "<td colspan='4'>Aucun résultat trouvé.</td>";
tableBody.appendChild(accunResultat);
}
});

var etudiants = [
{ nom: "Diallo", prenom: "ibrahima", âge: 21, note: 19 },
{ nom: "Diallo", prenom: "Mahmoud", âge: 25, note: 17 },
{ nom: "Ba", prenom: "Aissata", âge: 15, note: 15 },
{ nom: "Ndiaye", prenom: "Maisha", âge: 19, note: 14 },
{ nom: "Diallo", prenom: "Mohammed", âge: 26, note: 16 },
{ nom: "Fall", prenom: "Anta", âge: 18, note: 13 },
{ nom: "sow", prenom: "Fatima", âge: 19, note: 12.50 },
{ nom: "Ba", prenom: "Zahra", âge: 18, note: 16 },
{ nom: "junior", prenom: "salmane", âge: 35, note: 18 },
{ nom: "fal", prenom: "Moussa", âge: 21, note: 17.50 },

];

var tableBody = document.getElementById("etudiantTableBody");

etudiants.forEach(function (etudiantListe) {
var tableau = document.createElement("tr");
tableau.innerHTML = `<td>${etudiantListe.nom}</td>
<td>${etudiantListe.prenom}</td>
<td>${etudiantListe.âge}</td>
<td>${etudiantListe.note}</td>`;
tableBody.appendChild(tableau);
});

// Trouver l'étudiant avec la plus grande note
var etudiantNotePlus = etudiants.reduce(function (prev, current) {
return (prev.note > current.note) ? prev : current;
});

// Trouver l'étudiant avec la plus faible note
var etudiantNoteFaible = etudiants.reduce(function (prev, current) {
return (prev.note < current.note) ? prev : current;
});

// Trouver l'étudiant le plus âgé
var etudiantAgePlus = etudiants.reduce(function (prev, current) {
return (prev.âge > current.âge) ? prev : current;
});

// Trouver l'étudiant le plus jeune
var etudiantAgeMoins = etudiants.reduce(function (prev, current) {
return (prev.âge < current.âge) ? prev : current;
});

// Ajouter les informations supplémentaires au tableau
let tableClasseur = document.createElement("tr");
tableClasseur.innerHTML = "<td colspan='4'><strong>Classement des Etudiants</strong></td>";
tableBody.appendChild(tableClasseur);

let grandeNote = document.createElement("tr");
grandeNote.innerHTML = "<td>" + etudiantNotePlus.nom + "</td>" +
"<td>" + etudiantNotePlus.prenom + "</td>" +
"<td>" + etudiantNotePlus.âge + "</td>" +
"<td>" + etudiantNotePlus.note + "</td>";
tableBody.appendChild(grandeNote);

let petiteNote = document.createElement("tr");
petiteNote.innerHTML = "<td>" + etudiantNoteFaible.nom + "</td>" +
"<td>" + etudiantNoteFaible.prenom + "</td>" +
"<td>" + etudiantNoteFaible.âge + "</td>" +
"<td>" + etudiantNoteFaible.note + "</td>";
tableBody.appendChild(petiteNote);

let grandAge = document.createElement("tr");
grandAge.innerHTML = "<td>" + etudiantAgePlus.nom + "</td>" +
"<td>" + etudiantAgePlus.prenom + "</td>" +
"<td>" + etudiantAgePlus.âge + "</td>" +
"<td>" + etudiantAgePlus.note + "</td>";
tableBody.appendChild(grandAge);

let petitAge = document.createElement("tr");
petitAge.innerHTML = "<td>" + etudiantAgeMoins.nom + "</td>" +
"<td>" + etudiantAgeMoins.prenom + "</td>" +
"<td>" + etudiantAgeMoins.âge + "</td>" +
"<td>" + etudiantAgeMoins.note + "</td>";
tableBody.appendChild(petitAge);