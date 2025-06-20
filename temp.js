function paraCeusius(){
    f = parseInt(document.formulario.temperaturaf.value);
    resultado = (f - 32) * 5/9 
    document.getElementById("resultado").innerText = resultado
}

function paraFahrenheit(){
    c = parseInt(document.formulario.temperaturac.value);
    resultado = (9/5 * c) + 32
    document.getElementById("resultado").innerText = resultado
}