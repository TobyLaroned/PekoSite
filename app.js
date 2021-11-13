// Currently still uses global variables etc. Going to try to use callback functions in alpha branch.

// Messy solution, see if can integrate into single array

const itsmepekola = new Audio("assets/audio/pekola.mp3");
const ogeyyRrat = new Audio("assets/audio/ogeyyRrat.mp3");
const okPeko = new Audio("assets/audio/okPeko.mp3");
var pekolaAudios = [itsmepekola, ogeyyRrat, okPeko];


var count = 0;

function htmlUpdater(htmlID, newContent) {
    const element = document.getElementById(htmlID);
    element.innerHTML = newContent;
}

function clickCounter() {
    count += 1;
    return count;
}

function pekoCounter() {
    var currentCount = clickCounter();
    htmlUpdater("sessionClicks", currentCount);    
}

function getRandomPekoSound() {
    const random = Math.floor(Math.random() * pekolaAudios.length);
    var audioOut = pekolaAudios[random];
    return audioOut;
}

// Play random peko audio clips out of pekolaAudios
function pekoYell(audioInput) {
    var audioOut = audioInput;
    audioOut.play();
}

// RAPID FIRE AUDIO PLAYER TRIAL FIX - WIP from stackoverflow
function pekoYellerTest(){
    var audio = document.createElement("audio");
    audio.src = getRandomPekoSound();
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();   
}


// Main button click function
function pekoClick() {
    pekoYell(getRandomPekoSound());
    pekoCounter();    
}