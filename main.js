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
  });
}
