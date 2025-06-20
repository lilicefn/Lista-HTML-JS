const botao = document.getElementById('btnCor');
const cores = ["blue", "yellow", "red", "green"];

botao.addEventListener("click", function () {
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;

});
