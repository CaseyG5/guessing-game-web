const form = document.getElementById('interactive-form');
const entryField = document.getElementById('number-field');
const feedbackMsg = document.getElementById('feedback');
const guessBtn = document.getElementById('guess-button');

main();

function main() {
    const houseNumber = getRandomInt(100);
    let playerGuess;
    let lastGuessColor = "text-green-500";
    let numGuesses = 0;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        playerGuess = entryField.value;
        numGuesses++;

        if(playerGuess < houseNumber) {
            changeMessage(feedbackMsg, "Too Low", lastGuessColor, "text-blue-500");
            lastGuessColor = "text-blue-500";
        }
        else if(playerGuess > houseNumber) {
            changeMessage(feedbackMsg, "Too High", lastGuessColor, "text-red-500");
            lastGuessColor = "text-red-500";
        }
        else {
            changeMessage(feedbackMsg, "You Got It", lastGuessColor, "text-green-500");
            if(numGuesses <= 7) {
                feedbackMsg.innerText += ` in ${numGuesses} Tries!`;
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: {y: 0.6 }
                });
            }
            guessBtn.classList.add( 'hidden' );
        }
    });
}

/**
 *
 * @param max
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1) ) - 1;  // make max as a possibility too
}

/**
 *
 * @param domMsgObj
 * @param text
 * @param fromColor
 * @param toColor
 */
function changeMessage(domMsgObj, text, fromColor, toColor) {
    if(fromColor === toColor) return;        // if same type of guess, e.g. still too high, then no change needed
    domMsgObj.classList.remove(`${fromColor}`);
    domMsgObj.classList.add(`${toColor}`);
    domMsgObj.innerText = text;
}