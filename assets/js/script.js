/**
1. Global Constants
2. Global vars = let
3. function
4. document ready
**/

// Selectors for elements on the page to interact with
let button = document.querySelector('#shakeButton');
let answer = document.querySelector('#answer');

// Generate a random number
function generateRandom(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
  console.log(randomNumber);
}

// Call a random number
let randomNumber = generateRandom(3);
alert(randomNumber);

//Event listener for button click
button.addEventListener('click', submitQuestion);

//Clicking shake button provides answer
function submitQuestion() {
  document.getElementById('answer').innerHTML = 'test'
}

//Random answers
// 0 -> It is certain.
// 1 -> As I see it, yes.
// 2 -> Reply hazy, try again.
// 3 -> Don't count on it.

// Display the answer in place of 8 ball