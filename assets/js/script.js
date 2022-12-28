/** Array of possible answers. */
const ANSWERS = [
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

/** Selectors for elements on the page to interact with. */
let question = document.querySelector('.user-question');
let button = document.querySelector('#shakeButton');
let ballBlack = document.querySelector('.ball-black');
let answer = document.querySelector('.holding-text');
let errorMessage = document.querySelector('.error-message-text');

/** 
 * DOMContentLoaded event.
 * with event listeners for enter key press or button click.
 */
document.addEventListener('DOMContentLoaded', function() {
  question.addEventListener('keypress', enterButton);
  button.addEventListener('click', validateQuestion);
});


/** 
 * If the user presses the "Enter" key on the keyboard.
 * Trigger the button element with a click.
 */
function enterButton (event) {
  if (event.key === "Enter") {
    button.click();
  }
}

/** 
 * If the user question is an empty string.
 * Display error message class & remove after 1.5 seconds.
 * Else, add animate class for eight ball & remove after 1 second.
 * Also, disable button during animation.
 */
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

/** 
 * Remove animate class.
 * Execute generateAnswer function.
 */
function animationTimeOut() {
  ballBlack.classList.remove('animate');
  generateAnswer();
}

/** 
 * Generate a random integer between 0 and 19.
 * Use randomly generated integer to select an answer from ANSWERS array.
 * Change text content of eight ball to display selected answer.
 * Revert back to holding eight ball text after 2 seconds.
 */
function generateAnswer() {
  let selectedAnswer = Math.floor(Math.random() * 20);
  let displayedAnswer = ANSWERS[selectedAnswer];
  answer.textContent = displayedAnswer;
  answer.classList.remove('holding-text');
  answer.classList.add('answer-text');

  setTimeout(answerTimeOut, 2000);
}

/** 
 * Change text content of eight ball to 8.
 * Remove answer-text class.
 * Add holding-text class.
 * Enable button.
 */
function answerTimeOut() {
  answer.textContent = '8';
  answer.classList.remove('answer-text');
  answer.classList.add('holding-text');
  button.disabled = false;
}

/** Add error-message-display class. */
function errorTimeOut() {
  errorMessage.classList.add('error-message-display');
}