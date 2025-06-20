function verificarResposta() {
    const opcoes = document.getElementsByName("Quiz");
    const respostaCorreta = "800 milhões";
    let respostaSelecionada = null;

    // Percorre todas as opções de rádio para ver qual está selecionada
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) { //se o botão na posição está marcado. O .checked é booleana
            respostaSelecionada = opcoes[i].value; //pega o valor selecionado e guarda
            break; //para parar o loop assim que encontrar a opção marcada
        }
    }
    // Verifica se algo foi selecionado
    if (!respostaSelecionada) {
        document.getElementById("resultado").innerText = "Por favor, selecione uma resposta.";
        return;
    }
    // Compara com a resposta correta
    if (respostaSelecionada === respostaCorreta) {
        document.getElementById("resultado").innerText = "✅ Resposta correta! Parabéns.";
    } else {
        document.getElementById("resultado").innerText = "❌ Resposta erradas. A resposta correta é 800 milhões.";
    }
}