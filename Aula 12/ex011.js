/*var idade = 17
if (idade<16) {
    console.log('Não vota')
}else{
    if (idade>=16 && idade < 18){
    console.log('Voto opcional')
    }else{
        console.log('Voto obrigatório')
    }
}  ouuuuu */

var idade = 45
if (idade<16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
