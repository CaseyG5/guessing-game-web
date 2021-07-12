const entryField = document.getElementById('number-field');
const feedbackMsg = document.getElementById('feedback');
const guessBtn = document.getElementById('guess-button');


const randomInt = getRandomInt(100);
let numGuesses = 0;

guessBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // retrieve integer (guess) from number field
    // increment number of guesses
    // compare it to our number
    // if too low then show 'too low' in blue
    // else if too high then show 'too high' in red
    // else show 'you got it' in green and
        // if tries <= 7 blow the confetti
    // disable or hide guess button
});


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1) ) - 1;  // make max as a possibility too
}