// Función para determinar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Bucle do-while para obtener un número válido del usuario
let numero;
do {
    numero = prompt("Ingresa un número:");
    numero = parseInt(numero);
} while (isNaN(numero));

// Llamamos a la función para determinar si el número es par o impar
const resultado = esParOImpar(numero);

// Mostramos el resultado en un alert
alert(`El número ${numero} es ${resultado}.`);