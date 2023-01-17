'use strict';
// Generating a random number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//the Score initial value
let score = 20;

// Lowest highscore is 0
let highscore = 0;

// Creating a function to change the message as it reduces duplicate code
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};
// Creating the click event for the check button
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	// When there is no input
	if (!guess) {
		displayMessage('⛔No number!!');

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage('Correct Number 🎉');

		document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			// Here this will reduce duplicate code as if its not lower than its higher than secretNumber using the unary operation.
			displayMessage(guess < secretNumber ? '📉Too Low!' : '📈Too High!');

			score--;

			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥You Lost the game!');

			document.querySelector('.score').textContent = 0;
		}
	}
	//   // When guess is too Low
	//   else if (guess < secretNumber) {
	//     if (score > 1) {
	//       document.querySelector('.message').textContent = '📉Too Low!';

	//       score--;

	//       document.querySelector('.score').textContent = score;
	//     } else {
	//       document.querySelector('.message').textContent = '💥You Lost the game!';

	//       document.querySelector('.score').textContent = 0;
	//     }

	//     // When guess is too High
	//   } else if (guess > secretNumber) {
	//     if (score > 1) {
	//       document.querySelector('.message').textContent = '📈Too High!';

	//       score--;

	//       document.querySelector('.score').textContent = score;
	//     } else {
	//       document.querySelector('.message').textContent = '💥You Lost the game!';

	//       document.querySelector('.score').textContent = 0;
	//     }
	//   }
});

//Creating the Click event for the again button
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	document.querySelector('.score').textContent = score;

	document.querySelector('.number').textContent = '?';

	document.querySelector('body').style.backgroundColor = '#222';

	document.querySelector('.number').style.width = '15rem';

	document.querySelector('.guess').value = '';

	displayMessage('Start guessing...');

	secretNumber = Math.trunc(Math.random() * 20) + 1;
});
