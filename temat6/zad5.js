function wiecejNizDwadziescia(person){
    return person[2]>20
}

let arr=[['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27]]

let wyniki=arr.filter(wiecejNizDwadziescia)
console.log(wyniki)
