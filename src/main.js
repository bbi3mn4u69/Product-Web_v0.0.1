// mennu 


const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menu-button");

// add event

menuButton.addEventListener("click",() => {
menu.classList.toggle("invisible");
}
)