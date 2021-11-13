// Currently still uses global variables etc. Going to try to use callback functions in alpha branch.

const pekolaAudio = document.getElementById("pekolaAudio");
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

// Will eventually play random peko clips out of array of like 3-5 random mp3 clips
function pekoYell() {
    playAudio(pekolaAudio);
}

function playAudio(audioFile) {
    audioFile.play();
}


// Main button click function
function pekoClick() {
    pekoYell();
    pekoCounter();
    
}