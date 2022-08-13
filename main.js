const fab = document.querySelector(".fab")
const menu = document.querySelector(".menu")
let state = false

fab.addEventListener("click", function() {
  if (state === false) {
    state = true
    menu.style.display = "block"
  } else {
    state = false
    menu.style.display = "none"
  }
})
