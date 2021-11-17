// Currently still uses global variables etc. Going to try to use callback functions in alpha branch.

// Messy solution, see if can integrate into single array

const pekolaChance = 0.99; // Chance the main "itsamepekola" sound will play on button press

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

// Outputs limited random choice based on wanted maximixed percentage mainPercent
function getIndex(mainPercent, varAmount) {
    var outputIndex = 0;
    var d = Math.random();

    if (varAmount == 1) {
        return outputIndex;
    } else if (d < mainPercent) {
        return outputIndex; 
    } else {
        var percentLeftover = 1 - mainPercent;
        var currentPercent = percentLeftover/(varAmount-1);
        for (i = 0; i < varAmount-1; i++) {
            // Repeat if check as many times as there are audio files
            if ((d - mainPercent) < currentPercent) {
                outputIndex += 1;
                break;
            } else {
                outputIndex += 1;
                currentPercent += percentLeftover/(varAmount-1); 
            }
        }
        return outputIndex;
    }
}

function pekoCounter() {
    var currentCount = clickCounter();
    htmlUpdater("sessionClicks", currentCount);    
}

function getRandomPekoSound() {
    // const random = Math.floor(Math.random() * pekolaAudios.length);
    const audioIndex = getIndex(pekolaChance, pekolaAudios.length);
    console.log(audioIndex);
    var audioOut = pekolaAudios[audioIndex];
    return audioOut;
}

// Play random peko audio clips out of pekolaAudios
function pekoYell(audioInput) {
    var audioOut = audioInput;
    audioOut.play();
}

// RAPID FIRE AUDIO PLAYER TRIAL FIX - WIP from stackoverflow
// function pekoYellerTest(){
//     var audio = document.createElement("audio");
//     audio.src = getRandomPekoSound();
//     audio.addEventListener("ended", function () {
//         document.removeChild(this);
//     }, false);
//     audio.play();   
// }


// Main button click function
function pekoClick() {
    pekoYell(getRandomPekoSound());
    pekoCounter();    
}



