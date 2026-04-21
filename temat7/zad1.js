class Auto {
    constructor(rok,przebieg,cena_wyjsciowa) {
        this.rok=rok;
        this.przebieg=przebieg;
        this.cena_wyjsciowa=cena_wyjsciowa;
        this.cena_koncowa=cena_wyjsciowa;
    }
    podniesCeneWyjsciowa(){
        this.cena_wyjsciowa+=1000;
        this.cena_koncowa=this.cena_wyjsciowa;
    }

    obnizZaWiek(){
        const obecnyRok=new Date().getFullYear();
        const wiekAuta=obecnyRok-this.rok;
        this.cena_koncowa=this.cena_wyjsciowa-(wiekAuta*1000);
    }

    obnizZaPrzebieg() {
        const ileSetek = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= ileSetek * 10000;
    }

    aktualizujAuto(nowyRok,nowyPrzebieg){
        this.rok = nowyRok;
        this.przebieg = nowyPrzebieg;

        this.cena_koncowa = this.cena_wyjsciowa;
        this.obnizZaWiek();
        this.obnizZaPrzebieg();
    }

}

let tab=[];
let a1 = new Auto(2024, 100000, 9000);

let a2 = new Auto(2024, 100000, 20000);
function dopiszDoTablicy(auto){
    if (auto.cena_koncowa>10000){
        tab.push(auto)
    }
}

function zwiekszRok(){
    for (let auto of tab){
        auto.rok+=1;
    }
}

dopiszDoTablicy(a1);
dopiszDoTablicy(a2);

zwiekszRok();

console.log(tab);