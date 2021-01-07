'use strict'

document.getElementById('mybtn').addEventListener('click', ageguess)
// Event Listener connects the button with the function "ageguess()"

function ageguess () {
  const guess = (document.getElementById('guess').value)
  // gets guess from html document
  let counter = 18 / 2 + 10
  while (counter = guess) {
      alert('correct')
    } if (counter < guess) {
      alert('guess is too big')
    } if (counter > guess) {
      alert('guess is too small')
  }
}