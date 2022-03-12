const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red", "black", "pink", "yellow", "gray", "green", "blue", "purple"];
button.addEventListener("click", changeBackground);

function changeBackground() {
    const rastgele = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgele];
    body.style.backgroundColor = secilenRenk;
    body.style.backgroundcolor = secilenRenk;
}