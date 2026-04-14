function sortowanieTrojki(a,b){
    return (a%3)-(b%3);
}

let arr=[5,4,1,3,9,24]
let sort =arr.sort(sortowanieTrojki)

console.log(sort)
