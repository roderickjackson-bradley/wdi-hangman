/*----------------- 

1. Constants
2. App's State (Variables)
3. Cached Element References
4. Event Listeners
5. Functions

------------------*/


/*----- constants -----*/ 

const MAX_WRONG_GUESSES = 6;

const WORDS = [
    'DATATYPES', 'OBJECTS', 'ARRAYS', 'FUNCTIONS', 'VARIABLES', 'ENOUGH'
];

/*----- app's state (variables) -----*/ 

/*----------------- 
We spoke of keeping the (usedLetters) in an array but I'm thinking a hash map if JS has one
------------------*/

let usedLetters, wrongGuesses, secret, guess;

/*----- cached element references -----*/ 

const letterBtns = document.querySelectorAll('#letters button');

const hangManImg = document.querySelector('section');

const guessEl = document.getElementById('guess');

/*----- event listeners -----*/ 

document.getElementById('letters').addEventListener('click', handleLetterClick);


/*----- functions -----*/

init();

function init() {
    //usedLetters, wrongGuesses, secret, guess;
    usedLetters = [];
    wrongGuesses = [];
    let rndIdx = Math.floor(Math.random() * WORDS.length);
    console.log(rndIdx);
    secret = WORDS[rndIdx];
    console.log(secret);
    guess = '_'.repeat(secret.length);
    render();
}

function render() {
    guessEl.textContent = guess;
    hangManImg.style.backgroundPosition = `${-75 * wrongGuesses.length}px 0`;
}

function handleLetterClick(evt) {
   let letter = evt.target.textContent;
   let guessChars = guess.split('');
   if (secret.includes(letter)) {
       for (let i = 0; i < secret.length; i++) {
           let char = secret.charAt(i);
           if (char === secret) {
               guessChars[i] = letter;
           }
       }
       guess = guessChars.join('');
   } else{
    wrongGuesses.push(letter);
   }

   usedLetters.push(letter);
   render();
}