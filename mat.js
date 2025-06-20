function verificarResposta() {
    const respostasCorretas = {
        Q1: "2",
        Q2: "12",
        Q3: "5",
    };

    for (let i = 1; i <= 3; i++) {
        const questao = "Q" + i; //laço que repete de 1 até 3, uma vez para cada pergunta.
        const opcoes = document.getElementsByName(questao); //Pega todas as opções da pergunta atual.
        let selecionada = null; //guarda o valor da resposta escolhida

        for (let opcao of opcoes) { //verifica cada opção da pergunta
            if (opcao.checked) {    //opcao - cada botão de rádio e opcoes é a lista de botões de rádio
                selecionada = opcao.value;
                break;
            }
        }

        const resultado = document.getElementById("resultado" + i); //na pergunta 2, pega o elemento com id resultado2
        if (!selecionada) {
            resultado.innerText = "❗ Por favor, selecione uma resposta.";
        } else if (selecionada === respostasCorretas[questao]) {
            resultado.innerText = "✅ Resposta correta!";
        } else {
            resultado.innerText = `❌ Resposta errada. A resposta correta é ${respostasCorretas[questao]}.`;
        }
    }
}
