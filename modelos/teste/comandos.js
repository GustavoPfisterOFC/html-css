

function criar (){
    let msg = document.querySelector('div#res')
    var nome=[] 
    let nom = document.querySelector('input#txtnome')
    var num = document.querySelector('input#txtsenha')
    nome.push(nom.value)
    msg.innerHTML += nome
}
function parimp(n){
    if(n %2 == 0){
        return'Par'
    }else{
        return'Impar'
    }
    
}