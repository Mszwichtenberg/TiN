function cenzura(zdanie, ban) {
    return zdanie.replace(ban, "*");
}

console.log(cenzura("Lubie male kotki","kot"))
