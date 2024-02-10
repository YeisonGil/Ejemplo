
function OrdenarNumeros(numeros) {
    // Aqui utilizo el metodo filter para filtrar los numeros, por par e impar.
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);

    //con el metodo sort se ordenan en orden ascendente
    pares.sort((a, b) => a - b);
    impares.sort((a, b) => a - b);

    const OrdenarNumeros = [...pares, ...impares];

    return OrdenarNumeros;
}

let numeros = [];
let num;
do {
    num = prompt("Ingresa un número (Para salir, deja el espacio en blanco):");
    if (num !== "" && !isNaN(num)) {
        numeros.push(parseInt(num));
    }
} while (num !== "");

console.log("Los números ingresados son:", numeros);

const resultado = OrdenarNumeros(numeros);

console.log("El resultado es:", resultado);

document.addEventListener("DOMContentLoaded", function () {
    var resultadoN = document.getElementById("resultadosN");
    var desordenN = document.getElementById("desordenN");
    desordenN.textContent = "Números ingresados: " + numeros.join(', ');
    resultadoN.textContent = "Resultado: " + resultado.join(', ');
});