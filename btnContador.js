let cont = 0
const btn = document.getElementById("botao")
const span = document.getElementById("contador")

btn.addEventListener("click", () =>{
    cont++;
    span.textContent = cont;
});

btn.addEventListener("dblclick", () =>{
    cont = 0;
    span.textContent = cont
});