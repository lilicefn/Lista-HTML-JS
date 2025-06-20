function Tabuada(){
    numero = parseInt(document.formulario.numero.value);
    for (let i = 1; i <= 10; i++) { //O i++ garante que a variável i aumente em 1 após cada iteração
        tabuada = numero*i
        alert(`${numero} x ${i} = ${tabuada}`)
      };
    return tabuada
}

//for ([inicialização]; [condição]; [expressão final])
   //declaração