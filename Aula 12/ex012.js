var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora< 12){
    console.log(`Bom dia! São ${hora} horas.`)
} else if (hora <= 18) {
    console.log(`Boa tarde! São ${hora} horas.`)
} else {
    console.log(`Boa noite! São ${hora} horas`)
}