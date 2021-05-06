const screen = document.querySelector("body");
const bnt = document.querySelector(".main__bnt");

bnt.addEventListener("click", changeMode);

function changeMode(){
    screen.classList.toggle("dark_mode");
}