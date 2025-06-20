let contador = 0
const elementoContador = document.getElementById("contador")

function Aumentar(){
    contador++;
    atualizarContador();
}

function Diminuir(){
    contador--;
    atualizarContador();
}

function atualizarContador() {
    elementoContador.textContent = contador;
}