'use strict'

document.getElementById('mybtn').addEventListener('click', ageguess)
// Event Listener connects the button with the function "ageguess()"

function ageguess () {
  const age = 14
  // assigns a variable to age
  let guess = 0
  // assigns a variable to guess
  while (guess !== age) {
    guess = parseInt(prompt('Guess my age'))
    // opens a prompt
    if (guess === age) {
      alert('correct')
      // opens an alert
    } else if (guess < age) {
      alert('too young, try again!')
      // opens an alert
    } else if (guess > age) {
      alert('too old, try again!')
      // opens an alert
    }
  }
}
