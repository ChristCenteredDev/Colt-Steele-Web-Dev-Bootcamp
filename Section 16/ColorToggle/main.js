// Color Changer - Toggle the body's background color between purple and white when a button is clicked
let button = document.querySelector("button");
let body = document.querySelector("body");
let isWhite = true;

button.addEventListener("click", function() {
  if(isWhite) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "white";
  }

  isWhite = !(isWhite);
});
