// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph")
const modalElement = document.getElementById('modal')

function likedHeart(event) {
  const heart = event.target
  if (heart.innerText == EMPTY_HEART) {
    mimicServerCall()
    .then (function(serverMessage) {
      alert(serverMessage)
      heart.classList.add('activated-heart')
      heart.innerText = FULL_HEART
    })
    .catch(function(error) {
      alert(error)
      modalElement.classList.remove('hidden')
      setTimeout(timer, 3000)
      function timer() {
        modalElement.classList.add('hidden')
      }
    })
  } else {
    heart.classList.remove('activated-heart');
    heart.innerText = EMPTY_HEART
  }
  
}

hearts.forEach(hearts => {
  hearts.addEventListener('click', likedHeart)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
