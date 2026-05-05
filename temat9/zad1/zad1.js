function dodajDiv() {
    let kontener = document.getElementById("kontener");

    let nowyDiv = document.createElement("div");
    nowyDiv.classList.add("box");
    nowyDiv.textContent = "Nowy div";

    kontener.appendChild(nowyDiv);
}

function usunPierwszy() {
    let kontener = document.getElementById("kontener");
    let pierwszyDiv = kontener.firstElementChild;

    if (pierwszyDiv) {
        kontener.removeChild(pierwszyDiv);
    }
}

function zmienKolorTrzeciego() {
    let divy = document.getElementsByClassName("box");

    if (divy.length >= 3) {
        divy[2].style.backgroundColor = "red";
    }
}

function zmienTekst() {
    let divy = document.getElementsByClassName("box");

    for (let div of divy) {
        div.textContent = "nowy tekst";
    }
}