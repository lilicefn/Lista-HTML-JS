let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function atualizarDisplay() {
    const timer = document.getElementById("timer");
    let h = horas < 10 ? "0" + horas : horas; //(condição ? seSim : seNão)
    let m = minutos < 10 ? "0" + minutos : minutos; // verifica se hours é menor que 10. Se for,
    let s = segundos < 10 ? "0" + segundos : segundos;//coloca um 0 na frente para ficar com 2 dígitos.
    timer.textContent = `${h}:${m}:${s}`;
}

function iniciarTimer() {
    if (intervalo) return; // Evita múltiplos intervalos
    intervalo = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        atualizarDisplay();
    }, 1000);
}

function pararTimer() {
    clearInterval(intervalo);
    intervalo = null;
}

function zerarTimer() {
    pararTimer();
    segundos = 0;
    minutos = 0;
    horas = 0;
    atualizarDisplay();
}

atualizarDisplay() //Mostra 00:00:00 ao carregar a página