function otworzLightbox(sciezka) {
    let lightbox = document.getElementById("lightbox");
    let duzeZdjecie = document.getElementById("duzeZdjecie");

    duzeZdjecie.src = sciezka;
    lightbox.style.display = "block";
}

function zamknijLightbox() {
    let lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}