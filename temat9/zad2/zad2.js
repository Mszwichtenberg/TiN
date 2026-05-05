function oblicz() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let dzialanie = document.getElementById("dzialanie").value;
    let wynik;

    if (dzialanie === "+") {
        wynik = a + b;
    } else if (dzialanie === "-") {
        wynik = a - b;
    } else if (dzialanie === "*") {
        wynik = a * b;
    } else if (dzialanie === "/") {
        if (b === 0) {
            wynik = "Błąd";
        } else {
            wynik = a / b;
        }
    }

    document.getElementById("wynik").textContent = wynik;
}