const checkbox = document.getElementById("checkPermissao");
const botao = document.getElementById("btnEnviar");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
});