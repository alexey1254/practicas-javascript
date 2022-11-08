function verImpares() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    var minimo = Math.min(num1, num2);
    var maximo = Math.max(num1, num2);
    var numeros = dimeImpares(minimo, maximo);
    var texto = (document.getElementById("texto").innerHTML =
        "Los numeros son: ");
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = numeros;

    //console.log(numeros.toString());
}

function dimeImpares(minimo, maximo) {
    var numeros = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % 2 != 0) {
            numeros.push(i);
        }
    }
    return numeros;
}
