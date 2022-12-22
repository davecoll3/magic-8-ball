/**
1. Global Constants
2. Global vars = let
3. function
4. document ready
**/

// Selectors for elements on the page to interact with
let question = document.querySelector('.user-question');
let button = document.querySelector('#shakeButton');
let answer = document.querySelector('#answer');
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
]

// Event listeners for enter key or button click
question.addEventListener('keypress', enterButton);
button.addEventListener('click', validateQuestion);

// Enter key trigers click event
function enterButton (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
};

// Validation for empty question input field
function validateQuestion() {
  if (document.querySelector('.user-question'). value == "") {
    errorMessage.style.display = 'block';
    return false;
  } else {
    generateAnswer();
    errorMessage.style.display = 'none';
  }
};

// Generate a random answer from array
function generateAnswer() {
  let selectedAnswer = Math.floor(Math.random() * 20);
  let displayedAnswer = answersArray[selectedAnswer];
  answer.textContent = displayedAnswer;
  answer.style.fontSize = '18px';
  setTimeout(timeOut, 2000);
};

// Timeout function
function timeOut() {
  answer.textContent = '8';
  answer.style.fontSize = '120px';
};
