class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.tablicaOcen = [];
        this.srednia = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia}.`;
    }
    set oceny(x) {
        if (x instanceof Ocena) {
            this.tablicaOcen.push(x);

            let suma = 0;
            for (let ocena of this.tablicaOcen) {
                suma += ocena.wartosc;
            }

            this.srednia = suma / this.tablicaOcen.length;
        }
    }

    get oceny() {
        let tekst = "";


        for (let ocena of this.tablicaOcen) {
            tekst += `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}. `;
        }

        return tekst.trim();
    }
}

let s = new Student("Jan", "Kowalski");
console.log(s.hello());

s.oceny = new Ocena("WPR", 4);

s.oceny = new Ocena("TIN", 3);

s.oceny = new Ocena("POJ", 2);

console.log(s.hello());
console.log(s.oceny);