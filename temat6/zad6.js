function mapowanie(person) {
    return person[0] + ' | ' + person[1] + ' | ' + person[2]
}
let arr=[['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27]]
let wynik = arr.map(mapowanie)

console.log(wynik)