/**
1. Global Constants
2. Global vars = let
3. function
4. document ready
**/

// Selectors for elements on the page to interact with
let question = document.querySelector('#userQuestion');
let button = document.querySelector('#shakeButton');
let answer = document.querySelector('#answer');

let options = [
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

//Event listener for button click
button.addEventListener('click', generateAnswer);
question.addEventListener("keypress", enterButton);

// Generate a random number
function generateAnswer() {
  let index = Math.floor(Math.random() * 20);
  let message = options[index];
  answer.textContent = message;
  answer.style.fontSize = '18px';
  setTimeout(timeOut, 3000);
};

// Timeout function
function timeOut() {
  answer.textContent = '8';
  answer.style.fontSize = '120px';
};

// Enter button trigers click event
function enterButton (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
};
