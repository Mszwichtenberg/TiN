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
}

let s1 = new Student("Jan", "Kowalski");
s1.oceny = new Ocena("WPR", 5);
s1.oceny = new Ocena("TIN", 3);
s1.oceny = new Ocena("POJ", 4);

let s2 = new Student("Jan", "dsadsawad");
s2.oceny = new Ocena("WPR", 3);
s2.oceny = new Ocena("TIN", 5);
s2.oceny = new Ocena("POJ", 4);

let s3 = new Student("Jan", "Pawel");
s3.oceny = new Ocena("WPR", 5);
s3.oceny = new Ocena("TIN", 5);
s3.oceny = new Ocena("POJ", 2);

let studenci = [s1, s2, s3];

function pokazStudentow() {
    let miejsce = document.getElementById("students");

    for (let student of studenci) {
        let div = document.createElement("div");
        div.classList.add("student");

        let naglowek = document.createElement("div");

        naglowek.classList.add("student-header");

        naglowek.textContent = student.imie + " " + student.nazwisko;

        naglowek.onclick = function () {

            if (body.classList.contains("ukryty")) {
                body.classList.remove("ukryty");
                body.classList.add("pokazany");
            } else {
                body.classList.remove("pokazany");
                body.classList.add("ukryty");
            }

        };

        let body = document.createElement("div");
        body.classList.add("student-body");
        body.classList.add("ukryty");

        let lista = document.createElement("ul");

        for (let ocena of student.tablicaOcen) {
            let li = document.createElement("li");
            li.textContent = ocena.przedmiot + ": " + ocena.wartosc;
            lista.appendChild(li);
        }

        let srednia = document.createElement("div");
        srednia.classList.add("srednia");
        srednia.textContent = "Średnia: " + student.srednia;

        body.appendChild(lista);
        body.appendChild(srednia);

        div.appendChild(naglowek);
        div.appendChild(body);

        miejsce.appendChild(div);
    }

}

pokazStudentow();