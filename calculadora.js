function somar(){
    const a = parseFloat(document.formulario.numero1.value)
    const b = parseFloat(document.formulario.numero2.value)
    document.getElementById('resultado').innerText = `${a} + ${b} = ${a+b}`
}

function subtrair(){
    const a = parseFloat(document.formulario.numero1.value)
    const b = parseFloat(document.formulario.numero2.value)
    document.getElementById('resultado').innerText = `${a} - ${b} = ${a-b}`
}

function multiplicar(){
    const a = parseFloat(document.formulario.numero1.value)
    const b = parseFloat(document.formulario.numero2.value)
    document.getElementById('resultado').innerText = `${a} x ${b} = ${a*b}`
}

function dividir(){
    const a = parseFloat(document.formulario.numero1.value)
    const b = parseFloat(document.formulario.numero2.value)
    if (b === 0){
        return "Não podemos dividir por zero."
    }
    document.getElementById('resultado').innerText = `${a} ÷ ${b} = ${a/b}`
}