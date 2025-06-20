const tecla= document.getElementById("inputTecla")
const span = document.getElementById("teclaPressionada")

tecla.addEventListener("keydown", function(e){
    ultecla = e.key
    span.textContent = ultecla
});