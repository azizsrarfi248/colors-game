function changeGreen() {
  document.getElementById("title").style.color = "green";
}
function changePurple() {
  document.getElementById("title").style.color = "purple";
}
function changeYellow() {
  document.getElementById("title").style.color = "yellow";
}
function changeBlue() {
  document.getElementById("title").style.color = "blue";
}
function changeRed() {
  document.getElementById("title").style.color = "red";
}
var redButtons = document.getElementsByClassName("btn-red");

for (let i = 0; i < 4; i++) {
  redButtons[i].addEventListener("mouseover", () => {
    redButtons[i].className = "btn btn-red btn-red-move";
    if (i == 0) {
      document.getElementById("green-btn").className = "btn hidden-btn-show";
    } else if (i == 1) {
      document.getElementById("yellow-btn").className = "btn hidden-btn-show";
    } else if (i == 2) {
      document.getElementById("blue-btn").className = "btn hidden-btn-show";
    } else {
      document.getElementById("purple-btn").className = "btn hidden-btn-show";
    }
  });
}
