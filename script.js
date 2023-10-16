// DOM display calculadora
const visor = document.getElementById('display');
// Variaveis contador
var contadorAnterior = "";
var contadorAtual = "";
var resultado = "";
var operadorSinal;

function contador(num) {
    contadorAtual += Number(num);
    visor.innerHTML = contadorAtual;
}

function soma() {
    if (contadorAnterior == "") {
        contadorAnterior = contadorAtual;
        contadorAtual = "";
    } else {
        contadorAnterior = Number(contadorAnterior) + Number(contadorAtual);
        contadorAtual = "";
    }

    operadorSinal = "soma";
    visor.innerHTML = contadorAtual;
}

function subtracao() {
    if (contadorAnterior == "") {
        contadorAnterior = contadorAtual;
        contadorAtual = "";
    } else {
        contadorAnterior = Number(contadorAnterior) - Number(contadorAtual);
        contadorAtual = "";
    }

    operadorSinal = "subtracao";
    visor.innerHTML = contadorAtual;
}

function multiplicacao() {
    if (contadorAnterior == "") {
        contadorAnterior = contadorAtual;
        contadorAtual = "";
    } else {
        contadorAnterior = Number(contadorAnterior) * Number(contadorAtual);
        contadorAtual = "";
    }

    operadorSinal = "multiplicacao";
    visor.innerHTML = contadorAtual;
}

function divisao() {
    if (contadorAnterior == "") {
        contadorAnterior = contadorAtual;
        contadorAtual = "";
    } else {
        contadorAnterior = Number(contadorAnterior) / Number(contadorAtual);
        contadorAtual = "";
    }

    operadorSinal = "divisao";
    visor.innerHTML = contadorAtual;
}

function igual() {
    if (contadorAnterior !== "" && contadorAtual !== "") {
        if (operadorSinal == "soma") {
            if (resultado == "") {
                resultado = parseFloat(contadorAtual) + parseFloat(contadorAnterior);
                contadorAnterior = contadorAtual;
            } else {
                resultado = parseFloat(resultado) + parseFloat(contadorAtual);
            }
        }
        if (operadorSinal == "subtracao") {
            if (resultado == "") {
                resultado = parseFloat(contadorAnterior) - parseFloat(contadorAtual);
                contadorAnterior = contadorAtual;
            } else {
                resultado = parseFloat(resultado) - parseFloat(contadorAtual);
            }
        }
        if (operadorSinal == "multiplicacao") {
            if (resultado == "") {
                resultado = parseFloat(contadorAnterior) * parseFloat(contadorAtual);
                contadorAnterior = contadorAtual;
            } else {
                resultado = parseFloat(resultado) * parseFloat(contadorAtual);
            }
        }
        if (operadorSinal == "divisao") {
            if (resultado == "") {
                resultado = parseFloat(contadorAnterior) / parseFloat(contadorAtual);
                contadorAnterior = contadorAtual;
            } else {
                resultado = parseFloat(resultado) / parseFloat(contadorAtual);
            }
        }
    } else {
        alert("Favor inserior todos dados para efetuar os cálculos")
    }

    visor.innerHTML = resultado;
}

function limpar() {
    contadorAnterior = "";
    contadorAtual = "";
    operadorSinal = "";
    resultado = "";
    visor.innerHTML = contadorAtual;
}

// console.log(`Atual: ${contadorAtual} // Anterior: ${contadorAnterior}`)
