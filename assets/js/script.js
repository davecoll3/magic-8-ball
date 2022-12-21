/**
1. Global Constants
2. Global vars = let
3. function
4. document ready
**/

// Selectors for elements on the page to interact with
let button = document.querySelector('#shakeButton');
let answer = document.querySelector('#answer');
let options = [
  'It is certain.',
  'As I see it, yes.',
  'Do not count on it.',
  'Reply hazy, try again.'
]

// Generate a random number
function generateAnswer() {
  let index = Math.floor(Math.random() * 4);
  let message = options[index];
  answer.textContent = message;
  answer.style.fontSize = '18px';
};

//Event listener for button click
button.addEventListener('click', generateAnswer);

/* Clicking shake button provides answer
function submitQuestion() {
  document.getElementById('answer').innerHTML = 'test'
}
*/

//Random answers
// 0 -> I.
// 1 -> 
// 2 -> 
// 3 -> 

// Display the answer in place of 8 ball