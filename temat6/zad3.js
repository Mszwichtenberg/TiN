function cenzuraMasowa(word,ban){
    return word.replace(ban,'*')
}

let tab=['kotlet','koteczek','kozak']
let wyniki= tab.map(word=>cenzuraMasowa(word,'kot'))
console.log(wyniki)