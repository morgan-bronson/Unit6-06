'use strict'

document.getElementById('mybtn').addEventListener('click', ageguess)
// Event Listener connects the button with the function "ageguess()"

function ageguess () {
  let age = 14
  let guess = 0
  while (guess != age) {
    guess=parseInt(prompt("Guess my age"));
    if (guess == age) {
      alert('correct')
    } else if (guess < age) {
      alert('too young, try again!')
    } else if (guess > age) {
      alert('too old, try again!')
    }
  }
}
