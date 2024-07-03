function carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOA TARDE !
    img.src = 'manha.png.png'
    document.body.style.background = '#a85974'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'tarde.png.png'
    document.body.style.background = '#b5856d'
} else {
    //BOA NOITE !
    img.src = 'noite.png.png'
    document.body.style.background = '#4b6974'
}
}
