function carregar() {
    var msg = window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // ou var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        //bom dia
        img.src='imgmanha.png'
        document.body.style.background = "#e2cd9f"
    }else if (hora >=12 && hora <18){
        //boatarde
        img.src='imgtarde.png'
        document.body.style.background = "#b9846f"
    } else {
        //boa noite
        img.src='imgnoite.png'
        document.body.style.background = "#515154"
    }
}