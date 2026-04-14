function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return ((a + b) * h) / 2;
}

function poleRownolegloboku(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (a * h) / 2;
}

function policzPole(figura, a, b, h) {

    let figury = {
        prostokat: () => poleProstokata(a, b),
        trapez: () => poleTrapezu(a, b, h),
        rownoleglobok: () => poleRownolegloboku(a, h),
        trojkat: () => poleTrojkata(a, h)
    };

    if (figury[figura]) {
        return figury[figura]();
    } else {
        return "Nieznana figura";
    }
}


console.log(policzPole("prostokat",5,5,0))