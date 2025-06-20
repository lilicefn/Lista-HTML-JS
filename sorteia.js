let aleatorio = gerarNumeroAleatorio() //gera o número só 1 vez
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  // Math.random(): Retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo).
  //* (10 - 1 + 1): Multiplica o resultado por 10 (o valor máximo desejado) menos 1 (o valor mínimo) mais 1. 
  //Math.floor(): Arrendonda para baixo o resultado, para ser um inteiro.
  //+ 1: Adiciona 1 para que o resultado seja entre 1 e 10 (e não entre 0 e 9). 
}

function verificarNumero(){
    const numero = parseInt(document.formulario.numero.value)
    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert("Por favor, digite um número de 1 a 10.");
        return;
    } //isNAN - verifica se um valor é NaN (Not a Number, ou não um número)
    if(numero === aleatorio){
        alert("Parabéns! Você adivinhou o número.");
        aleatorio = gerarNumeroAleatorio();
    }else{
        alert("Você não adivinhou o número. Tente de novo.");
    }
}