'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Make a guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No guess value
  if (!guess) {
    displayMessage('No number...');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("That's my number!");

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#62c91e';
    document.querySelector('.number').style.width = '68rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!');

      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '24rem';
  document.querySelector('body').style.backgroundColor = '#000';
});
