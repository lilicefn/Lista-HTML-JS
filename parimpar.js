function ParImpar(){
    numero = parseFloat(document.formulario.numero.value);
    if(numero%2 == 0){
        alert("Seu número é par ");
    }else{
        alert("Seu número é impar ");
    }
}