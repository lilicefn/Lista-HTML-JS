const element = document.getElementById("contatoForm");

element.addEventListener("submit", function (event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        alert("Preencha todos os campos por favor.");
        event.preventDefault(); // Impede o envio do formulário
    }
});