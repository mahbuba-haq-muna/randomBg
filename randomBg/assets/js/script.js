const btn = document.getElementById("mainBtn");
const mainDiv = document.getElementById("mainDiv");
const color = ["red", "yellow", "blue", "green", "purple", "pink", "orange"];

btn.addEventListener("click", changeColor);

function changeColor(){
    const colorIndex = parseInt(Math.random() * color.length);
    mainDiv.style.backgroundColor = color[colorIndex];
}