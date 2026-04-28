class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    podniesCeneWyjsciowa() {
        this.cena_wyjsciowa += 1000;
        this.cena_koncowa = this.cena_wyjsciowa;
    }

    obnizZaWiek() {
        const obecnyRok = new Date().getFullYear();
        const wiekAuta = obecnyRok - this.rok;
        this.cena_koncowa = this.cena_wyjsciowa - (wiekAuta * 1000);
    }

    obnizZaPrzebieg() {
        const ileSetek = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= ileSetek * 10000;
    }

    aktualizujAuto(nowyRok, nowyPrzebieg) {
        this.rok = nowyRok;
        this.przebieg = nowyPrzebieg;

        this.cena_koncowa = this.cena_wyjsciowa;
        this.obnizZaWiek();
        this.obnizZaPrzebieg();
    }
}

let tab = [];

let a1 = new Auto(2024, 100000, 20000);
let a2 = new Auto(2020, 180000, 45000);
let a3 = new Auto(2018, 250000, 60000);
let a4 = new Auto(2022, 50000, 35000);

a1.obnizZaWiek();
a1.obnizZaPrzebieg();

a2.obnizZaWiek();
a2.obnizZaPrzebieg();

a3.obnizZaWiek();
a3.obnizZaPrzebieg();

a4.obnizZaWiek();
a4.obnizZaPrzebieg();

tab.push(a1);
tab.push(a2);
tab.push(a3);
tab.push(a4);

function zbudujTabelke() {
    let miejsce = document.getElementById("miejsceNaTabelke");

    let tabela = document.createElement("table");
    tabela.border = "1";

    let naglowek = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.textContent = "Rok";

    let th2 = document.createElement("th");
    th2.textContent = "Przebieg";

    let th3 = document.createElement("th");
    th3.textContent = "Cena wyjściowa";

    let th4 = document.createElement("th");
    th4.textContent = "Cena końcowa";

    naglowek.appendChild(th1);
    naglowek.appendChild(th2);
    naglowek.appendChild(th3);
    naglowek.appendChild(th4);

    tabela.appendChild(naglowek);

    for (let auto of tab) {
        let wiersz = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = auto.rok;

        let td2 = document.createElement("td");
        td2.textContent = auto.przebieg;

        let td3 = document.createElement("td");
        td3.textContent = auto.cena_wyjsciowa;

        let td4 = document.createElement("td");
        td4.textContent = auto.cena_koncowa;

        wiersz.appendChild(td1);
        wiersz.appendChild(td2);
        wiersz.appendChild(td3);
        wiersz.appendChild(td4);

        tabela.appendChild(wiersz);
    }

    miejsce.appendChild(tabela);
}

zbudujTabelke();