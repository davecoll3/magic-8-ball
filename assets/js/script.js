/**
1. Global Constants
2. Global vars = let
3. function
4. document ready
**/

// Selectors for elements on the page to interact with
let question = document.querySelector('.user-question');
let button = document.querySelector('#shakeButton');
let ballBlack = document.querySelector('.ball-black');
let answer = document.querySelector('.holding-text');
let errorMessage = document.querySelector('.error-message-text');

let answersArray = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Do not count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

// Event listeners for enter key or button click
question.addEventListener('keypress', enterButton);
button.addEventListener('click', validateQuestion);

// Enter key trigers click event
function enterButton (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
}

// Validation for empty question input field
function validateQuestion() {
  if (question.value == "") {
    errorMessage.classList.remove('error-message-display');
    setTimeout(errorTimeOut, 1500);
    return false;
  } else {
    ballBlack.classList.add('animate');
    button.disabled = true;
    setTimeout(animationTimeOut, 1000);
  }
}

// Generate a random answer from array
function generateAnswer() {
  let selectedAnswer = Math.floor(Math.random() * 20);
  let displayedAnswer = answersArray[selectedAnswer];
  answer.textContent = displayedAnswer;
  answer.classList.remove('holding-text');
  answer.classList.add('answer-text');
  
  setTimeout(answerTimeOut, 2000);
}

// Answer display timeout
function animationTimeOut() {
  ballBlack.classList.remove('animate');
  generateAnswer();
}

// Clear answer timeout function
function answerTimeOut() {
  answer.textContent = '8';
  answer.classList.remove('answer-text');
  answer.classList.add('holding-text');
  button.disabled = false;
}

// Error message timeout function
function errorTimeOut() {
  errorMessage.classList.add('error-message-display');
}