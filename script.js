/*HEADER UND NAVBAR*/








/*SLIDERFUNKTION*/
var slider = document.getElementById('slider');
var slideIndex = 0;
var slideWidth = document.querySelector('.product').offsetWidth + 10;
var maxSlides = slider.children.length;
var cloneCount = Math.ceil(maxSlides / 4) + 1; // Anzahl der Klon-Elemente

// Erstelle Klon-Elemente der Produkte für den Anfang und das Ende
for (var i = 0; i < cloneCount; i++) {
  for (var j = 0; j < maxSlides; j++) {
    var clone = slider.children[j].cloneNode(true);
    slider.appendChild(clone);
  }
}

maxSlides = slider.children.length; // Aktualisiere die Anzahl der Slides

function slideLeft() {
  if (slideIndex === 0) {
    return; // Kein Sliden nach links möglich, wenn beim ersten Produkt
  }
  slideIndex--;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  updateArrowVisibility();
}

function slideRight() {
  slideIndex++;
  if (slideIndex >= maxSlides) {
    slideIndex = 0;
    slider.style.transform = `translateX(0)`;
  } else {
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }
  updateArrowVisibility();
}

function updateArrowVisibility() {
  var arrowLeft = document.querySelector('.arrow-left');
  var arrowRight = document.querySelector('.arrow-right');

  if (slideIndex === 0) {
    arrowLeft.style.display = 'none'; // Verstecke die linke Spitze Klammer
  } else {
    arrowLeft.style.display = 'block'; // Zeige die linke Spitze Klammer
  }

  if (slideIndex >= maxSlides - 4) {
    arrowRight.style.display = 'none'; // Verstecke die rechte Spitze Klammer
  } else {
    arrowRight.style.display = 'block'; // Zeige die rechte Spitze Klammer
  }
}

// Beim Starten des Sliders die linke Spitzenklammer ausblenden
window.onload = function() {
  var arrowLeft = document.querySelector('.arrow-left');
  arrowLeft.style.display = 'none';
};

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Drehfunktion*/





/*********************************************/
/************RESPONSIVE STYLE****************/
/*******************************************/

// JavaScript-Funktion zum Umschalten des Burger-Menüs
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
