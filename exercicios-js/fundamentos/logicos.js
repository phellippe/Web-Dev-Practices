function compras (trabalho1, trabalho2) {
    const ComprarSorvete = trabalho1 || trabalho2
    const ComprarTv50 = trabalho1 && trabalho2
    //const ComprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const ComprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !ComprarSorvete //operador unario

    return { ComprarSorvete, ComprarTv50, ComprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))