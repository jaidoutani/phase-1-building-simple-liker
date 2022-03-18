// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-glyph")

  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', (e) => {
      e.preventDefault()
      let heart = e.target
      mimicServerCall()
        .then(function (response) {
          console.log("GOOD")
          if(heart.innerText === FULL_HEART){
            heart.innerText = EMPTY_HEART
            heart.classList.remove("activated-heart")
          } else {
            heart.innerText = FULL_HEART
            heart.classList.add("activated-heart")
          }
        })
        .catch(function (error) {
          console.log(("BAD"))
          let modal = document.getElementById("modal")
          modal.classList.remove("hidden")
          setTimeout(addHiddenClass, 3000)
        })
    })
  }
})
function addHiddenClass(){
  let modal = document.getElementById("modal")
  modal.classList.add("hidden")
}

 

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
