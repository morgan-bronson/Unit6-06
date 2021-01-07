'use strict'

document.getElementById('mybtn').addEventListener('click', ageguess)
// Event Listener connects the button with the function "ageguess()"

function ageguess () {
  const guess = (document.getElementById('guess').value)
  // gets guess from html document
  let x = 14
  while (x = 14) {
    if (x = 14) {
        alert('correct') 
    } else if (x < 14) {
       alert('too young, try again!') 
    } else if (x > 14) {
      alert('too old, try again!') 
    }
  }
}
