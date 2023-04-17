import { initializeImages ,triggerAlert , applyStates, iterateStatesRight, iterateStatesLeft} from "./carousel.js";



// manages the page loading

async function setCarousel() {
    // set carousel
    let root= document.getElementById('app');
    const page = await fetch('./partials/carousel.html');
   root.innerHTML = await page.text();
    initializeImages();
    let button = document.getElementById('buttonRight');
    button.addEventListener('click', function () {
        iterateStatesRight();

    });
    button = document.getElementById('buttonLeft');
    button.addEventListener('click', function () {
        iterateStatesLeft();

    });
}

setCarousel();