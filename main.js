// RED BTNS POSITIONS
var pos = [0, 0, 0, 0];

// RED BTNS COORDINATES
var coor = [
  [
    { x: 0, y: 0, d: 0 },
    { x: 0, y: -55, d: 10 },
    { x: 0, y: -100, d: -20 },
    { x: -200, y: 50, d: 35 },
    { x: -250, y: 0, d: 0 },
  ],
  [
    { x: 0, y: 0, d: 0 },
    { x: 0, y: -55, d: 10 },
    { x: -30, y: 148, d: -15 },
    { x: 0, y: 55, d: 90 },
    { x: 0, y: -55, d: 90 },
  ],
  [
    { x: 0, y: 0, d: 0 },
    { x: 0, y: -55, d: 10 },
    { x: 0, y: -250, d: 0 },
    { x: 0, y: -55, d: -10 },
    { x: 0, y: 55, d: 0 },
  ],
  [
    { x: 0, y: 0, d: 0 },
    { x: 0, y: -55, d: 10 },
    { x: 150, y: 0, d: -180 },
    { x: 200, y: 0, d: 120 },
    { x: 220, y: -400, d: 50 },
  ],
];

// Table Of Red Buttons
var redButtons = document.getElementsByClassName("red-btn");

// Change Color Of Title Function
function changeColor(color) {
  document.getElementById("title").style.color = color;
}

// Change Position Of Red Buttons When Hover
for (let i = 0; i < 4; i++) {
  redButtons[i].addEventListener("mouseover", () => {
    // Move The Position Of A Red When Hovred
    if (pos[i] == coor[i].length - 1) {
      pos[i] = 0;
      redButtons[i].style.zIndex = 1;
    } else {
      pos[i]++;
    }
    redButtons[i].style.transform = `translate(${coor[i][pos[i]].x}px,${
      coor[i][pos[i]].y
    }px) rotate(${coor[i][pos[i]].d}deg)`;

    // Show The Hidden Buttons When Hover A Red One
    if (i == 0) {
      document.getElementById("green-btn").style.zIndex = 1;
    } else if (i == 1) {
      document.getElementById("yellow-btn").style.zIndex = 1;
    } else if (i == 2) {
      document.getElementById("blue-btn").style.zIndex = 1;
    } else {
      document.getElementById("purple-btn").style.zIndex = 1;
    }
  });
}
