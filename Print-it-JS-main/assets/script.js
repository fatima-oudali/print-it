// Tableau contenant les informations des diapositives pour le carousel
const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


//Sélection des éléments du DOM pour les flèches et les bullets points
const leftArrow = document.querySelector ('.arrow_left');
const rightArrow = document.querySelector ('.arrow_right');
const dotsContainer = document.querySelector('.dots');


// Création et ajout des points des bullets points dans le carousel
slides.forEach((slide, index) => {
	const dot = document.createElement ('div'); // Crée un élément div pour le point
	dot.classList.add('dot'); // Ajoute la classe 'dot' au point
	if (index === 0) {
		dot.classList.add ('dot_selected'); // Ajoute la classe 'dot_selected' pour le premier point sélectionné
	}
	dotsContainer.appendChild(dot); // Ajoute le point au conteneur des points
})


// Sélection des éléments du DOM pour l'image de la bannière et le texte de la tagline
const imageElement = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('#banner p');
let currentSlideIndex = 0; // Index de la diapositive actuelle


// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
	imageElement.src = slides[index].image;   // Changer l'image affichée dans le carrousel
	tagLineElement.innerHTML = slides[index].tagLine; // Changer le texte associé à l'image

	// Mise à jour de l'état des bullets points
	document.querySelectorAll('.dot').forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === index); // Active le point correspondant à la diapositive actuelle
	})
}

// Affiche la première diapositive au chargement
showSlide(currentSlideIndex);


// Événement pour la flèche gauche (précédente)
leftArrow.addEventListener ('click', function() {
	console.log("Flèche gauche cliquée"); 

	// Passe à la diapositive précédente, ou à la dernière si on est sur la première
	currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1; 
	showSlide(currentSlideIndex);// Affiche la diapositive correspondante
});


// Événement pour la flèche droite (suivante)
rightArrow.addEventListener ('click', function() {
	console.log("Flèche droite cliquée");

	// Passe à la diapositive suivante, ou à la première si on est sur la dernière
	currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1; 
	showSlide(currentSlideIndex); // Affiche la diapositive correspondante
});