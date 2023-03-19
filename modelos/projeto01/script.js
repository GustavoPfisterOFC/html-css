function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value >ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homen'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','criança-homen.png')
             }else if( idade < 21){
                //jovem
                img.setAttribute('src','jovem-homen.png')
             }else if(idade<50){
                //adulto
                img.setAttribute('src','adulto-homen.png')
             }else{
                //idoso
                img.setAttribute('src','idoso-homen.png')
             }
        }else{
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','criança-mulher.png')
             }else if( idade < 21){
                //jovem
                img.setAttribute('src','jovem-mulher.png')
             }else if(idade<50){
                //adulto
                img.setAttribute('src','adulta-mulher.png')
             }else{
                //idoso
                img.setAttribute('src','idosa-mulher.png')
             }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade`
    res.appendChild(img)
}