'use strict';
const diceBtn = document.querySelector('.btn--roll');
const score = document.querySelector('.score');
const rasm = document.querySelector('.dice');
const elCurrentScore = document.querySelector('.current-score');
const currentPlayer1 = document.querySelector('.player--0');
const currentPlayer2 = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');

let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

diceBtn.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  rasm.src = `dice-${randomNum}.png`;
  if (randomNum !== 1) {
    currentScore += randomNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    scores[activePlayer] = 0;
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    currentPlayer1.classList.toggle('player--active');
    currentPlayer2.classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});

holdBtn.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  if (scores[activePlayer] >= 100) {
    console.log('sfsf');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    diceBtn.setAttribute('disabled', true);
    holdBtn.setAttribute('disabled', true);
  }
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentPlayer1.classList.toggle('player--active');
  currentPlayer2.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
});

resetBtn.addEventListener('click', function () {
  location.reload();
});
