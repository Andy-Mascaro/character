// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
const catchphrases = [];
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

headDropdown.addEventListener('change', () => {

    const value = headDropdown.value;
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    headCount++;
    displayStats();

    // get the value of the head dropdown


    // increment the head change count state
    
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
});


middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    middleCount++;
    displayStats();
    // get the value of the middle dropdown

    // increment the middle change count state
    
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
});


bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    bottomCount++;
    displayStats();

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    const catchphrase = catchphraseInput.value;
    catchphrases.push(catchphrase);
    displayCatchphrases(); 
    catchphraseInput.value = '';
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state

    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(headCount, middleCount, bottomCount);
    reportEl.textContent = statsString;
    
    // call this function with the correct arguments
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';
    for (let catchphrase of catchphrases) {

        const p = document.createElement('p');
        p.textContent = catchphrase;
        catchphrasesEl.append(p);
    }
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
