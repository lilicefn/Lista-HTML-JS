function calculaMedia(){
    nota1= parseFloat(document.formulario.nota1.value);
    nota2= parseFloat(document.formulario.nota2.value);
    nota3= parseFloat(document.formulario.nota3.value);
    media = ((nota1+nota2+nota3)/3).toFixed(2)
    return media
}

function aprovaReprova(){
    const media = calculaMedia() //chama a média após o usuário digitar
    if (media >= 6)
        alert(`Você foi aprovado com a média ${media}`)
    else{
        alert(`Você foi reprovado com a média ${media}`)
    }
}