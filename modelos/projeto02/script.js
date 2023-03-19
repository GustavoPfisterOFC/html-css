function carregar(){
var msg = document.querySelector('div#msg')
var img = document.getElementById('imagem')
var data = new Date()
var minutos =data.getMinutes()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

if(hora >= 0 && hora < 12){
    img.src = 'fotododia.png'
    document.body.style.backgroundColor = '#736B65'
}else if(hora>=12 && hora <=18){
    img.src= 'fotodatarde.png'
    document.body.style.backgroundColor = '#C3A893'
}else if(hora > 18){
    img.src ='fotodanoite.png'
    document.body.style.backgroundColor = '#000000'
}else{
    msg.innerHTML = 'Houve um erro para ler a hora'
    img.src = 'errorelogio.png'
    document.body.style.backgroundColor = '#FF0000'
}

}



